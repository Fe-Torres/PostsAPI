import { Router } from 'express';
import { postController } from '../../controllers/post/PostsController';
import { postControllerInMemory } from '../../controllers/post/PostsControllerInMemory';

const router: Router = Router();

router.post('/api/posts', postController.createPost);
router.get('/api/posts', postController.listingPosts);
router.get('/api/posts/:id', postController.getPostByID);
router.put('/api/posts/:id', postController.editPost);
router.delete('/api/posts/:id', postController.deletePost);

router.post('/dev/posts', postControllerInMemory.createPost);
router.get('/dev/posts', postControllerInMemory.listingPosts);
router.get('/dev/posts/:id', postControllerInMemory.getPostByID);
router.put('/dev/posts/:id', postControllerInMemory.editPost);
router.delete('/dev/posts/:id', postControllerInMemory.deletePost);

export { router };