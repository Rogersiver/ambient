import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TracksService {
  constructor(private prisma: PrismaService) {}
  create(createTrackInput: Prisma.TrackCreateInput) {
    return this.prisma.track.create({ data: createTrackInput });
  }

  findAll() {
    const tracks = this.prisma.track.findMany({
      include: {
        Users_tracks: {
          include: {
            User: true,
            Album: true,
          },
        },
      },
    });
    return tracks;
  }

  findOne(trackFindFirstArgs: Prisma.TrackFindFirstArgs) {
    const track = this.prisma.track.findFirst(trackFindFirstArgs);
    return track;
  }

  update(
    updateTrackInput: Prisma.TrackUpdateInput,
    trackWhereInput: Prisma.TrackWhereUniqueInput,
  ) {
    return this.prisma.track.update({
      data: updateTrackInput,
      where: trackWhereInput,
    });
  }

  remove(trackWhereUniqueInput: Prisma.TrackWhereUniqueInput) {
    return this.prisma.track.delete({
      where: trackWhereUniqueInput
    })
  }
}
