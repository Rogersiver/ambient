import { User } from './user'
import { Track } from './track'
import { Album } from './album'

export interface Users_Tracks {
    id: number
    stream_service_name: string
    url_hash: string
    secret_key: string
    User: User!
    Track: Track
    Album: Album!
}