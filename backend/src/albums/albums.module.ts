import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, AlbumsResolver, AlbumsService],
})
export class AlbumsModule {}
