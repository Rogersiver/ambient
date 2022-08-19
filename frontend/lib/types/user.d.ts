import {Users_Tracks} from './users_tracks'
export interface User {
  id: string;
  user_name: string;
  is_admin?: Nullable<boolean>;
  insta?: Nullable<string>;
  created_at?: Nullable<DateTime>;
  Users_tracks: Users_tracks[];
}