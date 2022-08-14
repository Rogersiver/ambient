CREATE DATABASE IF NOT EXISTS ambientdb;

USE ambientdb;

CREATE TABLE album (
  id INT NOT           NULL AUTO_INCREMENT PRIMARY KEY,
  album_name           VARCHAR(50),
  album_prompt         VARCHAR(50),
  album_art_url        VARCHAR(50),
  total_desired_tracks INT
);

CREATE TABLE track (
  id                     INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  track_name             VARCHAR(50),
  track_description      VARCHAR(50),
  created_at             DATETIME DEFAULT CURRENT_TIMESTAMP,
  uploaded_at            DATETIME DEFAULT NULL,
  is_uploaded            BOOLEAN DEFAULT false,
  wav_file_path          VARCHAR(50),
  is_processed           BOOLEAN DEFAULT false,
  mp3_file_path          VARCHAR(50),
  album_id               INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album(id) ON DELETE CASCADE
);

CREATE TABLE user (
  id         INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name  VARCHAR(50),
  is_admin   BOOLEAN DEFAULT false,
  insta      VARCHAR(50),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users_tracks (
  id                     INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  track_id               INT,
  FOREIGN KEY (track_id) REFERENCES track(id) ON DELETE CASCADE,
  album_id               INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album(id) ON DELETE CASCADE,
  stream_service_name    VARCHAR(50) DEFAULT "Various Artists"
);

