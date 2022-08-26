import { gql, useMutation } from '@apollo/client';
 
const UPDATE_USERS_TRACK = gql`
mutation Mutation($updateUsersTrackInput: UpdateUsersTrackInput!, $usersTracksWhereInput: UsersTracksWhereInput) {
  updateUsersTrack(updateUsersTrackInput: $updateUsersTrackInput, usersTracksWhereInput: $usersTracksWhereInput) {
    id
    stream_service_name
    url_hash
    secret_key
    Album {
      id
      album_name
      album_prompt
      art_cloudinary_url
      total_desired_tracks
    }
    Track {
      id
      track_description
      track_name
      created_at
      uploaded_at
      is_uploaded
    }
  }
}
`;
 
export function updateUsersTrackMutation() {
  return useMutation(UPDATE_USERS_TRACK);
}