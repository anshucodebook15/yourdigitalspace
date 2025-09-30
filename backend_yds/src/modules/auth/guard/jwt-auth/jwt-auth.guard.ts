import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any) {
    // Ignore the raw "err" from passport
    if (!user) {
      let message = 'Unauthorized';

      if (info?.name === 'TokenExpiredError') {
        message = 'Token expired, please log in again';
      } else if (info?.name === 'JsonWebTokenError') {
        if (info?.message === 'jwt malformed') {
          message = 'Invalid token format';
        } else if (info?.message === 'invalid signature') {
          message = 'Invalid token signature';
        } else if (info?.message === 'jwt must be provided') {
          message = 'Token is missing';
        } else {
          message = 'Invalid token';
        }
      } else if (info?.name === 'NotBeforeError') {
        message = 'Token not active yet';
      }

      // Throw Nest exception only (this gets caught by your global filter)
      throw new UnauthorizedException(message);
    }

    return user;
  }
}
