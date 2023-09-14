import {Request} from 'express';

export interface RequestSession extends Request {
  [key: string]: { user: string } | any;
}
