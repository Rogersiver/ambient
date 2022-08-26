import { gql, useLazyQuery } from '@apollo/client';
import {Users_Tracks} from '../lib/types/users_tracks'
 
interface UsersTracksQueryResponse {
  usersTrack: Users_Tracks;
}
 
const GET_USERS_TRACKS = gql`
query UsersTrack($usersTracksWhereUniqueInput: UsersTracksWhereUniqueInput!) {
  usersTrack(usersTracksWhereUniqueInput: $usersTracksWhereUniqueInput) {
    id
    stream_service_name
    url_hash
    secret_key
    User {
      id
      user_name
      is_admin
      insta
      created_at
    }
    Track {
      id
      track_name
      track_description
      created_at
      uploaded_at
      is_uploaded
      wav_cloudinary_url
      is_processed
      mp3_cloudinary_url
      wvfrm_cloudinary_url
    }
    Album {
      id
      album_name
      album_prompt
      art_cloudinary_url
      total_desired_tracks
    }
  }
}
`;
 
export function useUsersTrackQuery() {
  return useLazyQuery<UsersTracksQueryResponse>(GET_USERS_TRACKS);
}