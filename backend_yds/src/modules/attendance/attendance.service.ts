import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Attendance } from './entities/attendance.entity';
import { Model } from 'mongoose';

@Injectable()
export class AttendanceService {

  constructor(@InjectModel(Attendance.name) private attendanceModel: Model<Attendance>) { }


  async punchIn(employeeId: string) {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const now = new Date().toLocaleTimeString('en-IN', { hour12: false });

    // check if already punched in today
    const existing = await this.attendanceModel.findOne({ employeeId, date: today });

    if (existing) {
      throw new BadRequestException('Already punched in today');
    }

    const attendance = new this.attendanceModel({
      employeeId,
      date: today,
      clockIn: now,
      status: 'Present',
    });

    return attendance.save();
  }

  async punchOut(employeeId: string) {
    const today = new Date().toISOString().slice(0, 10);
    const now = new Date().toLocaleTimeString('en-IN', { hour12: false });

    const attendance = await this.attendanceModel.findOne({ employeeId, date: today });

    if (!attendance) {
      throw new BadRequestException('No punch-in found for today');
    }

    if (attendance.clockOut) {
      throw new BadRequestException('Already punched out today');
    }

    attendance.clockOut = now;

    // calculate total hours
    const start = new Date(`${today}T${attendance.clockIn}`);
    const end = new Date(`${today}T${now}`);
    const diffHours = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60) * 100) / 100;

    attendance.totalHours = diffHours;

    return attendance.save();
  }

  async getAttendance(employeeId: string, month: string) {
    return this.attendanceModel.find({
      employeeId,
      date: { $regex: `^${month}` }, // e.g. "2025-09"
    });
  }



  // create(createAttendanceDto: CreateAttendanceDto) {
  //   return 'This action adds a new attendance';
  // }

  // findAll() {
  //   return `This action returns all attendance`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} attendance`;
  // }

  // update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
  //   return `This action updates a #${id} attendance`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} attendance`;
  // }
}
