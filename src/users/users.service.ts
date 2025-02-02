import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private nextId = 1;

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: this.nextId++,
      firstName: createUserDto?.firstName,
      lastName: createUserDto?.lastName,
      email: createUserDto?.email,
      password: createUserDto?.password,
      phoneNumber: createUserDto?.phoneNumber,
    };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  update(id: number, updateData: Partial<CreateUserDto>): User {
    const user = this.findOne(id);
    Object.assign(user, updateData);
    return user;
  }

  remove(id: number): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(index, 1);
  }
}
