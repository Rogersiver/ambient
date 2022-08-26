import { gql, useMutation } from '@apollo/client';
 
const CREATE_TRACK = gql`
mutation CreateTrack($createTrackInput: CreateTrackInput!) {
  createTrack(createTrackInput: $createTrackInput) {
    id
    track_name
    track_description
    created_at
    uploaded_at
    is_uploaded
    wav_cloudinary_url
  }
}
`;
 
export function createTrackMutation() {
  return useMutation(CREATE_TRACK);
}