import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts); // all can view post
router.post('/', auth, createPost); 
router.patch('/:id', auth, updatePost); // only posts user created
router.delete('/:id', auth, deletePost); // only posts user created
router.patch('/:id/likePost', auth, likePost); // only once

export default router;
