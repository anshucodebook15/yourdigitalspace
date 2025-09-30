import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) { }


  @Post('punch-in/:employeeId')
  async punchIn(@Param('employeeId') employeeId: string) {
    return this.attendanceService.punchIn(employeeId);
  }

  @Post('punch-out/:employeeId')
  async punchOut(@Param('employeeId') employeeId: string) {
    return this.attendanceService.punchOut(employeeId);
  }

  @Get(':employeeId/:month')
  async getAttendance(
    @Param('employeeId') employeeId: string,
    @Param('month') month: string, // e.g. "2025-09"
  ) {
    return this.attendanceService.getAttendance(employeeId, month);
  }









  // *************************************************************

  // @Post()
  // create(@Body() createAttendanceDto: CreateAttendanceDto) {
  //   return this.attendanceService.create(createAttendanceDto);
  // }

  // @Get()
  // findAll() {
  //   return this.attendanceService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.attendanceService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAttendanceDto: UpdateAttendanceDto) {
  //   return this.attendanceService.update(+id, updateAttendanceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.attendanceService.remove(+id);
  // }
}
