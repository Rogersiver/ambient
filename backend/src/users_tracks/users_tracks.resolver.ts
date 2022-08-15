import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersTracksService } from './users_tracks.service';
import { CreateUsersTrackInput } from './dto/create-users_track.input';
import { UpdateUsersTrackInput } from './dto/update-users_track.input';
import { Prisma } from '@prisma/client';

@Resolver('UsersTrack')
export class UsersTracksResolver {
  constructor(private readonly usersTracksService: UsersTracksService) {}

  @Mutation('createUsersTrack')
  create(
    @Args('createUsersTrackInput')
    createUsersTrackInput: Prisma.Users_tracksCreateInput,
  ) {
    return this.usersTracksService.create(createUsersTrackInput);
  }

  @Query('usersTracks')
  findAll() {
    return this.usersTracksService.findAll();
  }

  @Query('usersTrack')
  findOne(
    @Args('usersTracksFindFirstArgs')
    usersTracksFindFirstArgs: Prisma.Users_tracksFindFirstArgs,
  ) {
    return this.usersTracksService.findOne(usersTracksFindFirstArgs);
  }

  @Mutation('updateUsersTrack')
  update(
    @Args('updateUsersTrackInput')
    updateUsersTracksInput: Prisma.Users_tracksUpdateInput,
    @Args('usersTrackWhereInput')
    usersTracksWhereInput: Prisma.Users_tracksWhereUniqueInput,
  ) {
    return this.usersTracksService.update(
      updateUsersTracksInput,
      usersTracksWhereInput,
    );
  }

  @Mutation('removeUsersTrack')
  remove(@Args('id') id: number) {
    return this.usersTracksService.remove(id);
  }
}
