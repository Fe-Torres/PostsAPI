import { Request, Response } from 'express';
import { IPosts, postsInMemory } from '../../helpers/utils';

export class PostControllerInMemory {
    createPost(req: Request, res: Response): unknown {
        try {
            const newPost: IPosts = req.body;
            newPost.id = Math.floor(Date.now() * Math.random()).toString(36)
            postsInMemory.push(newPost);
            return res.status(200).json(newPost);
        } catch (error) {
            return res.status(400).json({ message: error.message, status_code: 400 });
        }
    }

    async listingPosts(_: Request, res: Response): Promise<unknown> {
        try {
            return res.status(200).json(postsInMemory);
        } catch (error) {
            return res.status(400).json({ message: error.message, status_code: 400 });
        }
    }

    async getPostByID(req: Request, res: Response): Promise<unknown> {
        try {
            const postId = req.params.id;
            let index = postsInMemory.findIndex(d => d.id === postId);
            if (index < 0) return res.status(404).json({ message: "Post not found", status_code: 404 })
            const result = postsInMemory[index]
            return res.send(result);
        } catch (error) {
            return res.status(400).json({ message: error.message, status_code: 400 });
        }
    }
    async editPost(req: Request, res: Response): Promise<unknown> {
        try {
            const postId = req.params.id;
            const updatePost: IPosts = req.body;

            let index = postsInMemory.findIndex(d => d.id === postId);
            if (index < 0) return res.status(404).json({ message: "Post not found", status_code: 404 })

            postsInMemory[index]["title"] = updatePost["title"]
            postsInMemory[index]["body"] = updatePost["body"]
            postsInMemory[index]["tags"] = updatePost["tags"]
            return res.json(postsInMemory[index]);
        } catch (error) {
            return res.status(400).json({ message: error.message, status_code: 400 });
        }
    }
    async deletePost(req: Request, res: Response): Promise<unknown> {
        try {
            const postId = req.params.id;
            let index = postsInMemory.findIndex(d => d.id === postId);
            if (index < 0) return res.status(404).json({ message: "Post not found", status_code: 404 })
            postsInMemory.splice(index, 1);
            return res.json({ message: "Post successfully deleted", status_code: 200 });
        } catch (error) {
            return res.status(400).json({ message: error.message, status_code: 400 });
        }
    }
}
export const postControllerInMemory = new PostControllerInMemory();
