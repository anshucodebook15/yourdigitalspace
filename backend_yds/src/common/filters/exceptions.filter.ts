import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { MongoError } from 'mongodb';

@Catch() // Catch all exceptions
export class ExceptionsErrorHandler implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let status: number;
        let message: string | object;

        console.log("Error Comes in exception");
        

        // ✅ Handle NestJS HttpExceptions
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse();
            message = typeof res === 'string' ? res : (res as any).message;
        }
        // ✅ Handle MongoDB errors
        else if (exception instanceof MongoError) {
            switch (exception.code) {
                case 11000: // Duplicate key error
                    status = HttpStatus.BAD_REQUEST;
                    message = 'Duplicate key error: some field must be unique';
                    break;
                default:
                    status = HttpStatus.INTERNAL_SERVER_ERROR;
                    message = 'Database error occurred';
            }
        }
        // ✅ Handle unknown errors
        else {
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            message = (exception as any)?.message || 'Internal server error';
        }

        const errorResponse = {
            success: false,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            statusCode: status,
            message,
        };

        response.status(status).json(errorResponse);
    }
}
