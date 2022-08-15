import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersTracksService {
  constructor(private prisma: PrismaService) {}
  create(createUsersTracksInput: Prisma.Users_tracksCreateInput) {
    return this.prisma.users_tracks.create({ data: createUsersTracksInput });
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

  findOne(usersTracksFindFirstArgs: Prisma.Users_tracksFindFirstArgs) {
    const album = this.prisma.users_tracks.findFirst(usersTracksFindFirstArgs);
    return album;
  }

  update(
    updateUsersTracksInput: Prisma.Users_tracksUpdateInput,
    usersTracksWhereInput: Prisma.Users_tracksWhereUniqueInput,
  ) {
    return this.prisma.users_tracks.update({
      data: updateUsersTracksInput,
      where: usersTracksWhereInput,
    });
  }
  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
