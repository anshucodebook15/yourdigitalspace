import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersServiceV1 } from 'src/modules/users/v1/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServiceV1 {
  constructor(
    private usersService: UsersServiceV1,
    private jwtService: JwtService,
  ) { }

  async googleLogin(profile: any) {
    return 'user Login successfully';
  }

  async validateUserByGoogle(profile: any) {
    return { profile: profile };
  }

  async generateJwt(user: any) {
    const payload = { sub: user.id, email: user.email }; // standard claims
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET || 'supersecret',
      });
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

}
