import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Request,
} from '@nestjs/common';
import { UsersServiceV1 } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth/jwt-auth.guard';
import { JwtLocalAuthGuard } from 'src/modules/auth/guard/local-jwt-auth/local-jwt-auth.guard';

@Controller({ path: 'user', version: '1' })
export class UsersControllerV1 {
  constructor(private readonly usersService: UsersServiceV1) { }

  @Post('local')
  async createLocalUser(@Body() dto: CreateUserDto) {
    return this.usersService.createLocalUser(dto);
  }

  @Post('google')
  async createGoogleUser(@Body() dto: CreateUserDto) {
    return this.usersService.createGoogleUser(dto);
  }

  @Get('testguard')
  async testAuth(@Request() req) {
    console.log('req user', req.user);
    return { message: 'not work Properly' };
  }
}
