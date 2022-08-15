import { Module } from '@nestjs/common';
import { UsersTracksService } from './users_tracks.service';
import { UsersTracksResolver } from './users_tracks.resolver';

@Module({
  providers: [UsersTracksResolver, UsersTracksService]
})
export class UsersTracksModule {}
