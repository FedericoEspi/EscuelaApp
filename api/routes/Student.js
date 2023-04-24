import { Router } from 'express';
const router = Router();
import  {createStudent, getStudents, getStudent, updateStudent } from '../controllers/StudentControllers.js';

router.post('/studentForm', createStudent);
router.get('/getStudent', getStudents);
router.get('/getStudent/:id', getStudent);
router.put('/editStudent/:id', updateStudent)

export default router;