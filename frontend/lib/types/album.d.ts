export interface Album {
    id: string;
    album_name?: Nullable<string>;
    album_prompt?: Nullable<string>;
    art_cloudinary_url?: Nullable<string>;
    total_desired_tracks?: Nullable<number>;
    Users_tracks: Users_tracks[];
}