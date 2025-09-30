import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Attendance extends Document {
  @Prop({ required: true })
  employeeId: string; // reference to Employee

  @Prop({ required: true })
  date: string; // YYYY-MM-DD

  @Prop()
  clockIn: string; // e.g. "09:15"

  @Prop()
  clockOut: string; // e.g. "18:00"

  @Prop({ default: 0 })
  totalHours: number;

  @Prop({ default: 'Absent' })
  status: string; // Present, Absent, Leave, Half-day

  @Prop({ default: 0 })
  overtimeHours: number;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);

// ✅ Ensure 1 record per employee per day
AttendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });
