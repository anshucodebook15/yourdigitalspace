import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Employee extends Document {
  @Prop({ unique: true, required: true })
  employeeId: string; // e.g., E-2025-0001

  @Prop({
    type: {
      firstName: String,
      lastName: String,
      dob: String,
      gender: String,
      email: { type: String, unique: true },
      phone: String,
      address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
      },
    },
    _id: false, // Prevents creation of an _id for the nested schema
  })
  personal: Record<string, any>;

  @Prop({
    type: {
      currentCompanyId: { type: Types.ObjectId, ref: 'Company' },
      currentManagerId: { type: Types.ObjectId, ref: 'Employee' },
      designation: String,
      joiningDate: String,
      status: { type: String, default: 'Active' },
      workType: { type: String, default: 'Full-time' },
      transferHistory: [
        {
          companyId: { type: Types.ObjectId, ref: 'Company' },
          managerId: { type: Types.ObjectId, ref: 'Employee' },
          startDate: String,
          endDate: { type: String, default: null },
        },
      ],
    },
    _id: false,
  })
  employment: Record<string, any>;

  @Prop({
    type: {
      accountHolder: String,
      accountNumber: String,
      ifscCode: String,
      bankName: String,
      branch: String,
    },
    _id: false,
  })
  bankDetails: Record<string, any>;

  @Prop({
    type: {
      basic: Number,
      hra: Number,
      allowances: Number,
      deductions: Number,
    },
    _id: false,
  })
  salaryStructure: Record<string, number>;

  @Prop({
    type: {
      googleId: String,
      role: {
        type: String,
        enum: ['employee', 'admin', 'hr', 'manager'],
        default: 'employee',
      },
    },
    _id: false,
  })
  auth: Record<string, any>;

  @Prop({
    type: [
      {
        token: String,
        deviceType: String,
        lastUpdated: String,
      },
    ],
    _id: false,
    default: [],
  })
  notificationTokens: Array<Record<string, any>>;

  @Prop({
    type: {
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
    },
    _id: false,
  })
  timestamps: Record<string, Date>;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
