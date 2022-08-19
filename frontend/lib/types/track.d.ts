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