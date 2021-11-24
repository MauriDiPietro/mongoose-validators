import express from 'express';
import * as UsersController from '../controllers/users.controllers.js';

const router = express.Router();

router.post('/', UsersController.createUser);

export default router;