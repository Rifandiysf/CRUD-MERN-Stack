import express from "express"
import { CreateUsers, DeleteUsers, getUsers, getUsersById, UpdateUsers } from "../controller/UserController.js"

const router = express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.post('/users', CreateUsers)
router.patch('/users/:id', UpdateUsers)
router.delete('/users/:id', DeleteUsers)


export default router