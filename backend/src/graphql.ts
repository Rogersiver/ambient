
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateAlbumInput {
    album_name?: Nullable<string>;
    album_prompt?: Nullable<string>;
    art_cloudinary_url?: Nullable<string>;
    total_desired_tracks?: Nullable<number>;
}

export interface UpdateAlbumInput {
    album_name?: Nullable<string>;
    album_prompt?: Nullable<string>;
    art_cloudinary_url?: Nullable<string>;
    total_desired_tracks?: Nullable<number>;
}

export interface AlbumWhereInput {
    id: string;
}

export interface CreateTrackInput {
    track_name?: Nullable<string>;
    track_description?: Nullable<string>;
    uploaded_at?: Nullable<DateTime>;
    is_uploaded?: Nullable<boolean>;
    wav_cloudinary_url?: Nullable<string>;
    is_processed?: Nullable<boolean>;
    mp3_cloudinary_url?: Nullable<string>;
    wvfrm_cloudinary_url?: Nullable<string>;
}

export interface UpdateTrackInput {
    track_name?: Nullable<string>;
    track_description?: Nullable<string>;
    uploaded_at?: Nullable<DateTime>;
    is_uploaded?: Nullable<boolean>;
    wav_cloudinary_url?: Nullable<string>;
    is_processed?: Nullable<boolean>;
    mp3_cloudinary_url?: Nullable<string>;
    wvfrm_cloudinary_url?: Nullable<string>;
}

export interface TrackWhereInput {
    id?: Nullable<number>;
    track_name?: Nullable<string>;
}

export interface TrackWhereUniqueInput {
    id?: Nullable<number>;
}

export interface CreateUserInput {
    exampleField?: Nullable<number>;
    user_name: string;
    is_admin?: Nullable<boolean>;
    insta?: Nullable<string>;
}

export interface UpdateUserInput {
    user_name?: Nullable<string>;
    is_admin?: Nullable<boolean>;
    insta?: Nullable<string>;
}

export interface UserWhereInput {
    id?: Nullable<number>;
    user_name?: Nullable<string>;
    insta?: Nullable<string>;
}

export interface CreateUsersTrackInput {
    stream_service_name?: Nullable<string>;
    url_hash?: Nullable<string>;
    secret_key?: Nullable<string>;
    user_id?: Nullable<number>;
    track_id?: Nullable<number>;
    album_id?: Nullable<number>;
}

export interface UpdateUsersTrackInput {
    stream_service_name?: Nullable<string>;
    user_id?: Nullable<number>;
    track_id?: Nullable<number>;
    album_id?: Nullable<number>;
    url_hash?: Nullable<string>;
    secret_key?: Nullable<string>;
}

export interface UsersTracksWhereUniqueInput {
    id?: Nullable<number>;
    url_hash?: Nullable<string>;
    secret_key?: Nullable<string>;
}

export interface UsersTracksWhereInput {
    id: number;
}

export interface Album {
    id: string;
    album_name?: Nullable<string>;
    album_prompt?: Nullable<string>;
    art_cloudinary_url?: Nullable<string>;
    total_desired_tracks?: Nullable<number>;
    Users_tracks: Users_tracks[];
}

export interface IQuery {
    albums(): Nullable<Album>[] | Promise<Nullable<Album>[]>;
    album(id: number): Nullable<Album> | Promise<Nullable<Album>>;
    tracks(): Nullable<Track>[] | Promise<Nullable<Track>[]>;
    track(trackWhereInput?: Nullable<TrackWhereInput>): Nullable<Track> | Promise<Nullable<Track>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(userWhereInput: UserWhereInput): Nullable<User> | Promise<Nullable<User>>;
    usersTracks(): Nullable<UsersTrack>[] | Promise<Nullable<UsersTrack>[]>;
    usersTrack(usersTracksWhereUniqueInput: UsersTracksWhereUniqueInput): Nullable<UsersTrack> | Promise<Nullable<UsersTrack>>;
}

export interface IMutation {
    createAlbum(createAlbumInput: CreateAlbumInput): Album | Promise<Album>;
    updateAlbum(updateAlbumInput: UpdateAlbumInput, albumWhereInput: AlbumWhereInput): Album | Promise<Album>;
    removeAlbum(id: number): Nullable<Album> | Promise<Nullable<Album>>;
    createTrack(createTrackInput: CreateTrackInput): Track | Promise<Track>;
    updateTrack(updateTrackInput: UpdateTrackInput, trackWhereInput?: Nullable<TrackWhereInput>): Track | Promise<Track>;
    removeTrack(trackWhereUniqueInput: TrackWhereUniqueInput): Nullable<Track> | Promise<Nullable<Track>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput, userWhereInput: UserWhereInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
    createUsersTrack(createUsersTrackInput: CreateUsersTrackInput): UsersTrack | Promise<UsersTrack>;
    updateUsersTrack(updateUsersTrackInput: UpdateUsersTrackInput, usersTracksWhereInput?: Nullable<UsersTracksWhereInput>): UsersTrack | Promise<UsersTrack>;
    removeUsersTrack(usersTracksWhereUniqueInput: UsersTracksWhereUniqueInput): Nullable<UsersTrack> | Promise<Nullable<UsersTrack>>;
}

export interface Track {
    id: string;
    track_name?: Nullable<string>;
    track_description?: Nullable<string>;
    created_at?: Nullable<DateTime>;
    uploaded_at?: Nullable<DateTime>;
    is_uploaded?: Nullable<boolean>;
    wav_cloudinary_url?: Nullable<string>;
    is_processed?: Nullable<boolean>;
    mp3_cloudinary_url?: Nullable<string>;
    wvfrm_cloudinary_url?: Nullable<string>;
    Users_tracks: Users_tracks[];
}

export interface User {
    id: string;
    user_name: string;
    is_admin?: Nullable<boolean>;
    insta?: Nullable<string>;
    created_at?: Nullable<DateTime>;
    Users_tracks: Users_tracks[];
}

export interface Users_tracks {
    id: string;
    url_hash?: Nullable<string>;
    secret_key?: Nullable<string>;
    stream_service_name?: Nullable<string>;
    User: User;
    Track?: Nullable<Track>;
    Album: Album;
}

export interface UsersTrack {
    id: string;
    stream_service_name?: Nullable<string>;
    url_hash?: Nullable<string>;
    secret_key?: Nullable<string>;
    User: User;
    Track?: Nullable<Track>;
    Album: Album;
}

export type DateTime = any;
type Nullable<T> = T | null;
