import { Module } from '@nestjs/common';
import { UsersTracksService } from './users_tracks.service';
import { UsersTracksResolver } from './users_tracks.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, UsersTracksResolver, UsersTracksService],
})
export class UsersTracksModule {}
