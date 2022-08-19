import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { Prisma } from '@prisma/client';

@Resolver('Track')
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}

  @Mutation('createTrack')
  create(@Args('createTrackInput') createTrackInput: Prisma.TrackCreateInput) {
    return this.tracksService.create(createTrackInput);
  }

  @Query('tracks')
  findAll() {
    return this.tracksService.findAll();
  }

  @Query('track')
  findOne(
    @Args('trackFindFirstArgs') trackFindFirstArgs: Prisma.TrackFindFirstArgs,
  ) {
    return this.tracksService.findOne(trackFindFirstArgs);
  }

  @Mutation('updateTrack')
  update(
    @Args('updateTrackInput') updateTrackInput: Prisma.TrackUpdateInput,
    @Args('trackWhereInput') trackWhereInput: Prisma.TrackWhereUniqueInput,
  ) {
    return this.tracksService.update(updateTrackInput, trackWhereInput);
  }

  @Mutation('removeTrack')
  remove(@Args('trackWhereUniqueInput') trackWhereUniqueInput: Prisma.TrackWhereUniqueInput) {
    return this.tracksService.remove(trackWhereUniqueInput);
  }
}
