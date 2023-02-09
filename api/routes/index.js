import { Router } from "express";
import { createStudent, deleteStudent, getStudent, getStudents, updateStudent } from "../controllers/StudentControllers.js"
const router = Router()

router.get("/students", getStudents)
router.post("/students/new", createStudent)
router.get("/students/:id", getStudent)
router.put("/students/:id", updateStudent)
router.delete("/students/:id", deleteStudent)

export default router