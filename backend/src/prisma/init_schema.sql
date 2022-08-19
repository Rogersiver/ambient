DROP DATABASE IF EXISTS ambientdb;
CREATE DATABASE IF NOT EXISTS ambientdb;

USE ambientdb;

CREATE TABLE Album (
  id INT NOT           NULL AUTO_INCREMENT PRIMARY KEY,
  album_name           VARCHAR(50),
  album_prompt         VARCHAR(50),
  art_cloudinary_url   VARCHAR(100),
  total_desired_tracks INT
);

CREATE TABLE Track (
  id                     INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  track_name             VARCHAR(50),
  track_description      VARCHAR(50),
  created_at             DATETIME DEFAULT CURRENT_TIMESTAMP,
  uploaded_at            DATETIME DEFAULT NULL,
  is_uploaded            BOOLEAN DEFAULT false,
  wav_cloudinary_url     VARCHAR(100),
  is_processed           BOOLEAN DEFAULT false,
  mp3_cloudinary_url     VARCHAR(100),
  wvfrm_cloudinary_url   VARCHAR(100)
);

CREATE TABLE User (
  id         INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name  VARCHAR(50) UNIQUE NOT NULL,
  is_admin   BOOLEAN DEFAULT false,
  insta      VARCHAR(50) UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Users_tracks (
  id                     INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id                INT NOT NULL,
  FOREIGN KEY (user_id)  REFERENCES User(id)  ON DELETE CASCADE,
  track_id               INT,
  FOREIGN KEY (track_id) REFERENCES Track(id) ON DELETE SET NULL,
  album_id               INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES Album(id) ON DELETE CASCADE,
  url_hash               VARCHAR(50) UNIQUE,
  secret_key             VARCHAR(50) UNIQUE,
  stream_service_name    VARCHAR(50) DEFAULT "Various Artists"
);

