import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserInput: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: createUserInput });
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

  findOne(userWhereInput: Prisma.UserWhereUniqueInput) {
    const user = this.prisma.user.findUnique({ where: userWhereInput });
    return user;
  }

  update(
    updateUserInput: Prisma.UserUpdateInput,
    userWhereInput: Prisma.UserWhereUniqueInput,
  ) {
    return this.prisma.user.update({
      data: updateUserInput,
      where: userWhereInput,
      include: {
        Users_tracks: {
          include: {
            Track: true,
            Album: true,
          },
        },
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
