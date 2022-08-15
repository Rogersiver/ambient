import { Test, TestingModule } from '@nestjs/testing';
import { UsersTracksResolver } from './users_tracks.resolver';
import { UsersTracksService } from './users_tracks.service';

describe('UsersTracksResolver', () => {
  let resolver: UsersTracksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersTracksResolver, UsersTracksService],
    }).compile();

    resolver = module.get<UsersTracksResolver>(UsersTracksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
