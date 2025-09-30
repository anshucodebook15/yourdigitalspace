import {
  IsString,
  IsEmail,
  IsDateString,
  IsOptional,
  IsObject,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  employeeId: string;

  @IsObject()
  personal: {
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };

  @IsObject()
  employment: {
    currentCompanyId: string;
    currentManagerId: string;
    designation: string;
    joiningDate: string;
    status?: string;
    workType?: string;
    transferHistory?: any[];
  };

  @IsObject()
  bankDetails: {
    accountHolder: string;
    accountNumber: string;
    ifscCode: string;
    bankName: string;
    branch: string;
  };

  @IsObject()
  salaryStructure: {
    basic: number;
    hra: number;
    allowances: number;
    deductions: number;
  };

  @IsObject()
  auth: {
    googleId?: string;
    role: 'employee' | 'admin' | 'hr' | 'manager';
  };
}
