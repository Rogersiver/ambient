import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    const users = this.prisma.user.findMany({
      include: {
        Users_tracks: {
          include: {
            Track: true,
            Album: true,
          },
        },
      },
    });
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
