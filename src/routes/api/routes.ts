import { Router } from 'express'
import { authController } from '../../controllers/auth/AuthController'
import { postController } from '../../controllers/post/PostsController'
import { postControllerInMemory } from '../../controllers/post/PostsControllerInMemory'
import { AuthMiddleware } from '../middleware/authMiddleware'

const router: Router = Router()

router.post('/api/posts', AuthMiddleware, postController.createPost)
router.get('/api/posts', AuthMiddleware, postController.listingPosts)
router.get('/api/posts/:id', AuthMiddleware, postController.getPostByID)
router.put('/api/posts/:id', AuthMiddleware, postController.editPost)
router.delete('/api/posts/:id', AuthMiddleware, postController.deletePost)

router.post('/dev/posts', AuthMiddleware, postControllerInMemory.createPost)
router.get('/dev/posts', AuthMiddleware, postControllerInMemory.listingPosts)
router.get('/dev/posts/:id', AuthMiddleware, postControllerInMemory.getPostByID)
router.put('/dev/posts/:id', AuthMiddleware, postControllerInMemory.editPost)
router.delete('/dev/posts/:id', AuthMiddleware, postControllerInMemory.deletePost)

router.post('/api/auth', authController.authenticate)

export { router }
