import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PayrollDocument = Payroll & Document;

class Earning {
    @Prop()
    type: string;

    @Prop()
    amount: number;
}

class Deduction {
    @Prop()
    type: string;

    @Prop()
    amount: number;
}

@Schema({ timestamps: true })
export class Payroll {
    @Prop({ required: true })
    employeeId: string;

    @Prop({ required: true })
    month: string; // e.g., "2025-09"

    @Prop({ type: [Earning], default: [] })
    earnings: Earning[];

    @Prop({ type: [Deduction], default: [] })
    deductions: Deduction[];

    @Prop()
    netPay: number;

    @Prop({ default: 'pending' })
    status: string;

    @Prop()
    paymentDate: Date;

    @Prop()
    bankReference: string;
}

export const PayrollSchema = SchemaFactory.createForClass(Payroll);
