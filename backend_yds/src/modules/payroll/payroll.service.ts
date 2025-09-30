import { Injectable } from '@nestjs/common';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Payroll } from './entities/payroll.entity';
import { Model } from 'mongoose';

@Injectable()
export class PayrollService {
  constructor(
    @InjectModel(Payroll.name) private payrollModel: Model<Payroll>,
  ) {}

  async createInitialPayroll(employeeId: string, salaryStructure: any) {
    const month = new Date().toISOString().slice(0, 7); // "2025-09"

    const netPay =
      (salaryStructure.basic || 0) +
      (salaryStructure.hra || 0) +
      (salaryStructure.allowances || 0) -
      (salaryStructure.deductions || 0);

    const payroll = new this.payrollModel({
      employeeId,
      month,
      earnings: {
        basic: salaryStructure.basic,
        hra: salaryStructure.hra,
        allowances: salaryStructure.allowances,
      },
      deductions: {
        deductions: salaryStructure.deductions,
      },
      netPay,
      status: 'Pending',
    });

    return payroll.save();
  }

  async findByEmployee(employeeId: string) {
    return this.payrollModel.find({ employeeId }).exec();
  }

  // **************************************************************
  create(createPayrollDto: CreatePayrollDto) {
    return 'This action adds a new payroll';
  }

  findAll() {
    return `This action returns all payroll`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payroll`;
  }

  update(id: number, updatePayrollDto: UpdatePayrollDto) {
    return `This action updates a #${id} payroll`;
  }

  remove(id: number) {
    return `This action removes a #${id} payroll`;
  }
}
