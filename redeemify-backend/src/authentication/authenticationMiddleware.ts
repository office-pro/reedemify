import {Request, Response} from 'express';
import { RequestSession } from '../interfaces/request.interface';

export class AuthenticationMiddleware {

  static authenticate(req: RequestSession, res: Response, next: any) {
    // if (req?.session && (req.session as any )?.user) {
      return next();
    // } else {
    //   res.json({errorMessage: "not logged in"})
    // }
  }

}