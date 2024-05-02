import express from 'express';
import { getUsers, createUser } from '../controllers/users.js';
const router = express.Router();


router.get('/', getUsers); // get all the users
router.post('/', createUser); // create a new user



export default router;