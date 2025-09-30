import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    password?: string; // only for local strategy

    @Prop()
    phone?: string;

    @Prop()
    googleId?: string; // for Google users

    @Prop()
    name?: string;

    @Prop({ default: 'local' })
    provider: 'local' | 'google';
}

export const UserSchema = SchemaFactory.createForClass(User);
