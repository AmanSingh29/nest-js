import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Aman', age: 25 },
    { id: 2, name: 'Mona', age: 24 },
    { id: 3, name: 'Shweta', age: 45 },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find((student) => student.id === id);
  }

  createStudent({ name, age }: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      name,
      age,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateData(id: number, { name, age }: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');
    this.students[index] = { name, age, id };
    return this.students[index];
  }

  updateField(id: number, data: Partial<{ name: string; age: number }>) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');
    this.students[index] = { ...this.students[index], ...data, id };
    return this.students[index];
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');
    this.students.splice(index, 1);
    return { message: 'Student Deleted!' };
  }
}
