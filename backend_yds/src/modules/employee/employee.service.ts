import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './entities/employee.entity';
import { Model } from 'mongoose';
import { PayrollService } from '../payroll/payroll.service';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    private payrollService: PayrollService, // 👈 Inject PayrollService
  ) { }

  async create(createEmployeeDto: CreateEmployeeDto) {

    // 1. Create employee
    const employee = await this.employeeModel.create({
      ...createEmployeeDto,
      notificationTokens: [],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
    });

    // Create payroll for the new employee
    await this.payrollService.createInitialPayroll(
      employee.employeeId,
      createEmployeeDto.salaryStructure,
    );

    return employee;
  }

  findAll() {
    return `This action returns all employee`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} employee`;
  // }

  // update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
  //   return `This action updates a #${id} employee`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} employee`;
  // }
}
