import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AlbumsService {
  constructor(private prisma: PrismaService) {}
  create(createAlbumInput: Prisma.AlbumCreateInput) {
    return this.prisma.album.create({ data: createAlbumInput });
  }

  findAll() {
    const albums = this.prisma.album.findMany({
      include: {
        Users_tracks: {
          include: {
            User: true,
            Track: true,
          },
        },
      },
    });
    return albums;
  }

  findOne(albumFindFirstArgs: Prisma.AlbumFindFirstArgs) {
    const album = this.prisma.album.findFirst(albumFindFirstArgs);
    return album;
  }

  update(
    updateAlbumInput: Prisma.AlbumUpdateInput,
    albumWhereInput: Prisma.AlbumWhereUniqueInput,
  ) {
    return this.prisma.album.update({
      data: updateAlbumInput,
      where: albumWhereInput,
    });
  }
  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
