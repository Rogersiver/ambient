import { Test, TestingModule } from '@nestjs/testing';
import { UsersTracksService } from './users_tracks.service';

describe('UsersTracksService', () => {
  let service: UsersTracksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersTracksService],
    }).compile();

    service = module.get<UsersTracksService>(UsersTracksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
