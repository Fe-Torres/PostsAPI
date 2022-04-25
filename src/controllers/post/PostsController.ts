import { Request, Response } from 'express'
import { IPosts } from '../../helpers/utils'
import Post from '../../models/Post'

export class PostController {
  async createPost (req: Request, res: Response): Promise<unknown> {
    try {
      const newPosts: IPosts = req.body
      const posts = new Post(newPosts)
      posts.save((error: any, result: any) => {
        if (error) {
          return res.status(500).json({ message: error.message, status_code: 500 })
        } else {
          return res.status(200).json(result)
        }
      })
    } catch (error) {
      return res.status(500).json({ message: error.message, status_code: 500 })
    }
  }

  async listingPosts (_: Request, res: Response): Promise<unknown> {
    try {
      Post.find((error: any, result: any) => {
        if (error) {
          return res.status(500).json({ message: error.message, status_code: 500 })
        } else {
          return res.send(result)
        }
      })
    } catch (error) {
      return res.status(500).json({ message: error.message, status_code: 500 })
    }
  }

  async getPostByID (req: Request, res: Response): Promise<unknown> {
    try {
      const postId = req.params.id
      Post.findById(postId, (error: any, result: any) => {
        if (error) {
          return res.status(500).json({ message: error.message, status_code: 500 })
        } else {
          if (!result) return res.status(404).json({ message: 'Post not found', status_code: 404 })
          return res.send(result)
        }
      })
    } catch (error) {
      return res.status(500).json({ message: error.message, status_code: 500 })
    }
  }

  async editPost (req: Request, res: Response): Promise<unknown> {
    try {
      const postId = req.params.id
      const updatePost:IPosts = req.body
      Post.findByIdAndUpdate(postId, updatePost, (error: any, result: any) => {
        if (error) {
          return res.status(500).json({ message: error.message, status_code: 500 })
        } else {
          if (!result) return res.status(404).json({ message: 'Post not found!', status_code: 404 })
          return res.json({ message: 'Post successfully changed', status_code: 200 })
        }
      })
    } catch (error) {
      return res.status(500).json({ message: error.message, status_code: 500 })
    }
  }

  async deletePost (req: Request, res: Response): Promise<unknown> {
    try {
      const postId = req.params.id
      Post.findByIdAndDelete(postId, (error: any, result: any) => {
        if (error) {
          return res.status(500).json({ message: error.message, status_code: 500 })
        } else {
          if (!result) return res.status(404).json({ message: 'Post not found!', status_code: 404 })
          return res.json({ message: 'Post successfully deleted', status_code: 200 })
        }
      })
    } catch (error) {
      return res.status(500).json({ message: error.message, status_code: 500 })
    }
  }
}
export const postController = new PostController()
