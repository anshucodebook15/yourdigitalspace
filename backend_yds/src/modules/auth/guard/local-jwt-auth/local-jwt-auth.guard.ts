import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthServiceV1 } from '../../v1/auth.service';

@Injectable()
export class JwtLocalAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthServiceV1) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing Authorization header');
    }

    const token = authHeader.split(' ')[1];
    const payload = await this.authService.verifyToken(token);

    console.log("Payload:", payload);
    

    // attach user to request
    request.user = payload;
    return true;
  }
}
