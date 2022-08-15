import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksResolver } from './tracks.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, TracksResolver, TracksService],
})
export class TracksModule {}
