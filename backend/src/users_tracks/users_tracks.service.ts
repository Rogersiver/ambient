import { Injectable } from '@nestjs/common';
import { CreateUsersTrackInput } from './dto/create-users_track.input';
import { UpdateUsersTrackInput } from './dto/update-users_track.input';

@Injectable()
export class UsersTracksService {
  create(createUsersTrackInput: CreateUsersTrackInput) {
    return 'This action adds a new usersTrack';
  }

  findAll() {
    return `This action returns all usersTracks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersTrack`;
  }

  update(id: number, updateUsersTrackInput: UpdateUsersTrackInput) {
    return `This action updates a #${id} usersTrack`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersTrack`;
  }
}
