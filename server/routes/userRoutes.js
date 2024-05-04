import express from 'express';
import { registerUser, authUser } from '../controllers/userControllers.js'

const router = express.Router();



router.route('/').post(registerUser);


// or router.post('/login', authUser);
router.route('/login').post(authUser);


export default router;