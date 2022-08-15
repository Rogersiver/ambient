import { CreateUsersTrackInput } from './create-users_track.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUsersTrackInput extends PartialType(CreateUsersTrackInput) {
  id: number;
}
