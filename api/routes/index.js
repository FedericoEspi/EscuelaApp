import { Router } from 'express';
const router = Router();
import student from './Student.js'
import user from './User.js'

router.use('/student', student);
router.use('/user', user);

export default router