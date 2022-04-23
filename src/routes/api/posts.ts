import { Router } from 'express';
import { postController } from '../../controllers/post/PostsController';

const router: Router = Router();

router.post('/api/posts', postController.createPost);
router.get('/api/posts', postController.listingPosts);
router.get('/api/posts/:id', postController.getPostByID);
router.put('/api/posts/:id', postController.editPost);
router.delete('/api/posts/:id', postController.deletePost);

export { router };