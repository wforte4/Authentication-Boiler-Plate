import express from 'express';
import UserRouter from './UsersRouter';

const router = express.Router();

router.use('/users', UserRouter)

export default router;