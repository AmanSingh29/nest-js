import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Aman',
      age: 25,
    },
    {
      id: 2,
      name: 'Mona',
      age: 24,
    },
  ];

  getAllUser() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
