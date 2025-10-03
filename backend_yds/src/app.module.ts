import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
// import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database/database.providers';
import { UsersModule } from './modules/users/users.module';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import googleOauthConfig from './config/google-oauth.config';
import baseConfig from './config/base.config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { EmployeeModule } from './modules/employee/employee.module';
import { PayrollModule } from './modules/payroll/payroll.module';
import { AttendanceModule } from './modules/attendance/attendance.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [baseConfig, databaseConfig, jwtConfig, googleOauthConfig],
      // envFilePath: [`.env.development`],
      envFilePath: [`.env.production`],
    }),

    // MongoDB connection
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
        // dbName: configService.get<string>('database.name'),
      }),
    }),

    AuthModule,
    UsersModule,
    EmployeeModule,
    PayrollModule,
    AttendanceModule,
  ],

  controllers: [AppController],
  providers: [DatabaseService, AppService],
})
export class AppModule { }

/**
 * 
 * envFilePath: (() => {
        switch (process.env.NODE_ENV) {
          case 'production':
            return '.env.production';
          case 'test':
            return '.env.test';
          default:
            return '.env.development';
        }
      })(),
 */
