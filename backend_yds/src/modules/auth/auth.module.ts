import { Module } from '@nestjs/common';
import { AuthControllerV1 } from './v1/auth.controller';
import { AuthServiceV1 } from './v1/auth.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './strategies/google.strategy';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtLocalAuthGuard } from './guard/local-jwt-auth/local-jwt-auth.guard';

@Module({
  imports: [
    UsersModule,
    // PassportModule.register({ defaultStrategy: 'google' }),
    PassportModule,
    JwtModule.register({
      secret:
        process.env.JWT_SECRET as string, // 🔑 put in .env
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthControllerV1],
  providers: [AuthServiceV1, GoogleStrategy, JwtStrategy],
  exports: [AuthServiceV1, JwtStrategy],
})
export class AuthModule { }
