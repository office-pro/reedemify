
import express, {Request, Response} from 'express';
import { RoleController } from '../Controller/roles.controller';

const rolesRouter = express.Router();

rolesRouter
.get('/', RoleController.getRoles)

export default rolesRouter;
