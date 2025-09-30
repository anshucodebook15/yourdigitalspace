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
  Res,
  Request,
} from '@nestjs/common';
import { AuthServiceV1 } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { GoogleAuthGuard } from '../guard/google-auth/google-auth.guard';
import { Response } from 'express';
import { JwtAuthGuard } from '../guard/jwt-auth/jwt-auth.guard';

@Controller({ path: 'auth', version: '1' })
export class AuthControllerV1 {
  constructor(private readonly authService: AuthServiceV1) { }

  @Get()
  testAuth() {
    return 'Auth is working';
  }

  // 🌐 Google login
  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    // Redirects to Google login
  }

  // ✅ Google callback
  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req, @Res() res) {
    const user = req.user; // comes from Google strategy validate()

    // 👇 generate JWT
    const token = await this.authService.generateJwt(user);

    // 👇 set token as HttpOnly cookie
    res.cookie('access_token', token, {
      // httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // or 'none' if frontend/backend are on different domains
      path: '/',
      maxAge: 1000 * 60 * 15, // 15 minutes
    });

    // Option 1: Redirect to frontend with token in query
    // return res.redirect(`http://localhost:4200/login/success?token=${token}`);

    // Option 2: Return token as JSON
    return res.json({ access_token: token });
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  testJwtAuth(@Request() req) {
    // return req.user;
    return "User Does its Job with superfast Spead";
  }


}
