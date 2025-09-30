import { Injectable, OnModuleInit, Logger } from "@nestjs/common";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";

@Injectable()
export class DatabaseService implements OnModuleInit {
    private readonly logger = new Logger(DatabaseService.name);

    constructor(@InjectConnection() private readonly connection: Connection) { }

    async onModuleInit() {
        this.connection.on('connected', () => {
            this.logger.log('✅ MongoDB connected');
        })

        this.connection.on('error', (err) => {
            this.logger.log('❌ MongoDB connection error:', err);
        })

        this.connection.on('disconnected', () => {
            this.logger.warn('⚠️ MongoDB disconnected');
        });
    }
}
