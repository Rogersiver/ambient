import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersTracksService } from './users_tracks.service';
import { CreateUsersTrackInput } from './dto/create-users_track.input';
import { UpdateUsersTrackInput } from './dto/update-users_track.input';

@Resolver('UsersTrack')
export class UsersTracksResolver {
  constructor(private readonly usersTracksService: UsersTracksService) {}

  @Mutation('createUsersTrack')
  create(@Args('createUsersTrackInput') createUsersTrackInput: CreateUsersTrackInput) {
    return this.usersTracksService.create(createUsersTrackInput);
  }

  @Query('usersTracks')
  findAll() {
    return this.usersTracksService.findAll();
  }

  @Query('usersTrack')
  findOne(@Args('id') id: number) {
    return this.usersTracksService.findOne(id);
  }

  @Mutation('updateUsersTrack')
  update(@Args('updateUsersTrackInput') updateUsersTrackInput: UpdateUsersTrackInput) {
    return this.usersTracksService.update(updateUsersTrackInput.id, updateUsersTrackInput);
  }

  @Mutation('removeUsersTrack')
  remove(@Args('id') id: number) {
    return this.usersTracksService.remove(id);
  }
}
