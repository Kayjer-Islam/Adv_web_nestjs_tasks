import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {

  constructor(private enrollmentService: EnrollmentService) {}

  @Get()
  getAll() {
    return this.enrollmentService.getEnrollments();
  }

  @Post()
  enroll(@Body() body: any) {
    const { studentName, courseId } = body;
    return this.enrollmentService.enrollStudent(studentName, courseId);
  }
}