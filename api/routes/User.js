import { Router } from 'express';
const router = Router();
import  {createUser, getUsers, getUser, updateUser } from '../controllers/UserControllers.js';

router.post('/register', createUser);
router.get('/getUsers', getUsers);
router.get('/getUsers/:id', getUser);
router.put('/editUser/:id', updateUser);

export default router;