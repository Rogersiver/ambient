
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateAlbumInput {
    exampleField?: Nullable<number>;
}

export interface UpdateAlbumInput {
    id: number;
}

export interface CreateTrackInput {
    exampleField?: Nullable<number>;
}

export interface UpdateTrackInput {
    id: number;
}

export interface CreateUserInput {
    exampleField?: Nullable<number>;
}

export interface UpdateUserInput {
    id: number;
}

export interface CreateUsersTrackInput {
    exampleField?: Nullable<number>;
}

export interface UpdateUsersTrackInput {
    id: number;
}

export interface Album {
    exampleField?: Nullable<number>;
    id: string;
    album_name?: Nullable<string>;
    album_prompt?: Nullable<string>;
    album_art_url?: Nullable<string>;
    total_desired_tracks?: Nullable<number>;
    Track: Track[];
    Users_tracks: Users_tracks[];
}

export interface IQuery {
    albums(): Nullable<Album>[] | Promise<Nullable<Album>[]>;
    album(id: number): Nullable<Album> | Promise<Nullable<Album>>;
    tracks(): Nullable<Track>[] | Promise<Nullable<Track>[]>;
    track(id: number): Nullable<Track> | Promise<Nullable<Track>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
    usersTracks(): Nullable<UsersTrack>[] | Promise<Nullable<UsersTrack>[]>;
    usersTrack(id: number): Nullable<UsersTrack> | Promise<Nullable<UsersTrack>>;
}

export interface IMutation {
    createAlbum(createAlbumInput: CreateAlbumInput): Album | Promise<Album>;
    updateAlbum(updateAlbumInput: UpdateAlbumInput): Album | Promise<Album>;
    removeAlbum(id: number): Nullable<Album> | Promise<Nullable<Album>>;
    createTrack(createTrackInput: CreateTrackInput): Track | Promise<Track>;
    updateTrack(updateTrackInput: UpdateTrackInput): Track | Promise<Track>;
    removeTrack(id: number): Nullable<Track> | Promise<Nullable<Track>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
    createUsersTrack(createUsersTrackInput: CreateUsersTrackInput): UsersTrack | Promise<UsersTrack>;
    updateUsersTrack(updateUsersTrackInput: UpdateUsersTrackInput): UsersTrack | Promise<UsersTrack>;
    removeUsersTrack(id: number): Nullable<UsersTrack> | Promise<Nullable<UsersTrack>>;
}

export interface Track {
    id: string;
    track_name?: Nullable<string>;
    track_description?: Nullable<string>;
    created_at?: Nullable<DateTime>;
    uploaded_at?: Nullable<DateTime>;
    is_uploaded?: Nullable<boolean>;
    wav_file_path?: Nullable<string>;
    is_processed?: Nullable<boolean>;
    mp3_file_path?: Nullable<string>;
    Album: Album;
    Users_tracks: Users_tracks[];
    exampleField?: Nullable<number>;
}

export interface User {
    id: string;
    user_name?: Nullable<string>;
    is_admin?: Nullable<boolean>;
    insta?: Nullable<string>;
    created_at?: Nullable<DateTime>;
    Users_tracks: Users_tracks[];
    exampleField?: Nullable<number>;
}

export interface Users_tracks {
    id: string;
    stream_service_name?: Nullable<string>;
    User?: Nullable<User>;
    Track?: Nullable<Track>;
    Album: Album;
}

export interface UsersTrack {
    exampleField?: Nullable<number>;
}

export type DateTime = any;
type Nullable<T> = T | null;
