import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersTracksService {
  constructor(private prisma: PrismaService) {}
  create(createUsersTracksInput: Prisma.Users_tracksCreateInput) {
    const url = Math.random().toString(36).substring(2, 15);
    createUsersTracksInput.url_hash = url;
    return this.prisma.users_tracks.create({
      data: createUsersTracksInput,
      include: {
        User: true,
        Track: true,
        Album: true,
      },
    });
  }

  findAll() {
    const users_tracks = this.prisma.users_tracks.findMany({
      include: {
        User: true,
        Track: true,
        Album: true,
      },
    });
    return users_tracks;
  }

  findOne(usersTracksWhereUniqueInput: Prisma.Users_tracksWhereUniqueInput) {
    const users_track = this.prisma.users_tracks.findUnique({
      where: usersTracksWhereUniqueInput,
      include: {
        User: true,
        Track: true,
        Album: true,
      },
    });
    return users_track;
  }

  update(
    updateUsersTracksInput: Prisma.Users_tracksUpdateInput,
    usersTracksWhereInput: Prisma.Users_tracksWhereUniqueInput,
  ) {
    return this.prisma.users_tracks.update({
      data: updateUsersTracksInput,
      where: usersTracksWhereInput,
      include: {
        User: true,
        Track: true,
        Album: true,
      },
    });
  }
  remove(usersTracksWhereUniqueInput: Prisma.Users_tracksWhereUniqueInput) {
    console.log(usersTracksWhereUniqueInput);
    return this.prisma.users_tracks.delete({
      where: usersTracksWhereUniqueInput,
    });
  }
}
