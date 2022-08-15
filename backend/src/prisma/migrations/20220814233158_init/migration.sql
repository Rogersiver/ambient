-- CreateTable
CREATE TABLE `Album` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `album_name` VARCHAR(50) NULL,
    `album_prompt` VARCHAR(50) NULL,
    `album_art_url` VARCHAR(50) NULL,
    `total_desired_tracks` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Track` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `track_name` VARCHAR(50) NULL,
    `track_description` VARCHAR(50) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `uploaded_at` DATETIME(0) NULL,
    `is_uploaded` BOOLEAN NULL DEFAULT false,
    `wav_file_path` VARCHAR(50) NULL,
    `is_processed` BOOLEAN NULL DEFAULT false,
    `mp3_file_path` VARCHAR(50) NULL,
    `album_id` INTEGER NOT NULL,

    INDEX `album_id`(`album_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(50) NULL,
    `is_admin` BOOLEAN NULL DEFAULT false,
    `insta` VARCHAR(50) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users_tracks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `track_id` INTEGER NULL,
    `album_id` INTEGER NOT NULL,
    `stream_service_name` VARCHAR(50) NULL DEFAULT 'Various Artists',

    INDEX `album_id`(`album_id`),
    INDEX `track_id`(`track_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Track` ADD CONSTRAINT `Track_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `Album`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Users_tracks` ADD CONSTRAINT `Users_tracks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Users_tracks` ADD CONSTRAINT `Users_tracks_ibfk_2` FOREIGN KEY (`track_id`) REFERENCES `Track`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Users_tracks` ADD CONSTRAINT `Users_tracks_ibfk_3` FOREIGN KEY (`album_id`) REFERENCES `Album`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
