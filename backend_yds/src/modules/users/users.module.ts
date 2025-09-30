import { Module } from '@nestjs/common';
// import { UsersServiceV1 } from './users.service';
import { UsersControllerV1 } from './v1/users.controller';
import { UsersServiceV1 } from './v1/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersControllerV1],
  providers: [UsersServiceV1],
  exports: [UsersServiceV1],
})
export class UsersModule { }
