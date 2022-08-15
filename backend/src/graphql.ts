
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAlbumInput {
    exampleField?: Nullable<number>;
}

export class UpdateAlbumInput {
    id: number;
}

export class CreateTrackInput {
    exampleField?: Nullable<number>;
}

export class UpdateTrackInput {
    id: number;
}

export class CreateUserInput {
    exampleField?: Nullable<number>;
}

export class UpdateUserInput {
    id: number;
}

export class CreateUsersTrackInput {
    exampleField?: Nullable<number>;
}

export class UpdateUsersTrackInput {
    id: number;
}

export class Album {
    exampleField?: Nullable<number>;
    id: string;
    album_name?: Nullable<string>;
    album_prompt?: Nullable<string>;
    album_art_url?: Nullable<string>;
    total_desired_tracks?: Nullable<number>;
    Users_tracks: Users_tracks[];
}

export abstract class IQuery {
    abstract albums(): Nullable<Album>[] | Promise<Nullable<Album>[]>;

    abstract album(id: number): Nullable<Album> | Promise<Nullable<Album>>;

    abstract tracks(): Nullable<Track>[] | Promise<Nullable<Track>[]>;

    abstract track(id: number): Nullable<Track> | Promise<Nullable<Track>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract usersTracks(): Nullable<UsersTrack>[] | Promise<Nullable<UsersTrack>[]>;

    abstract usersTrack(id: number): Nullable<UsersTrack> | Promise<Nullable<UsersTrack>>;
}

export abstract class IMutation {
    abstract createAlbum(createAlbumInput: CreateAlbumInput): Album | Promise<Album>;

    abstract updateAlbum(updateAlbumInput: UpdateAlbumInput): Album | Promise<Album>;

    abstract removeAlbum(id: number): Nullable<Album> | Promise<Nullable<Album>>;

    abstract createTrack(createTrackInput: CreateTrackInput): Track | Promise<Track>;

    abstract updateTrack(updateTrackInput: UpdateTrackInput): Track | Promise<Track>;

    abstract removeTrack(id: number): Nullable<Track> | Promise<Nullable<Track>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract createUsersTrack(createUsersTrackInput: CreateUsersTrackInput): UsersTrack | Promise<UsersTrack>;

    abstract updateUsersTrack(updateUsersTrackInput: UpdateUsersTrackInput): UsersTrack | Promise<UsersTrack>;

    abstract removeUsersTrack(id: number): Nullable<UsersTrack> | Promise<Nullable<UsersTrack>>;
}

export class Track {
    id: string;
    track_name?: Nullable<string>;
    track_description?: Nullable<string>;
    created_at?: Nullable<DateTime>;
    uploaded_at?: Nullable<DateTime>;
    is_uploaded?: Nullable<boolean>;
    wav_file_path?: Nullable<string>;
    is_processed?: Nullable<boolean>;
    mp3_file_path?: Nullable<string>;
    Users_tracks: Users_tracks[];
    exampleField?: Nullable<number>;
}

export class User {
    id: string;
    user_name?: Nullable<string>;
    is_admin?: Nullable<boolean>;
    insta?: Nullable<string>;
    created_at?: Nullable<DateTime>;
    Users_tracks: Users_tracks[];
    exampleField?: Nullable<number>;
}

export class Users_tracks {
    id: string;
    stream_service_name?: Nullable<string>;
    User?: Nullable<User>;
    Track?: Nullable<Track>;
    Album: Album;
}

export class UsersTrack {
    exampleField?: Nullable<number>;
}

export type DateTime = any;
type Nullable<T> = T | null;
