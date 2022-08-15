/*
  Warnings:

  - You are about to drop the column `album_id` on the `Track` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Track` DROP FOREIGN KEY `Track_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Users_tracks` DROP FOREIGN KEY `Users_tracks_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Users_tracks` DROP FOREIGN KEY `Users_tracks_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Users_tracks` DROP FOREIGN KEY `Users_tracks_ibfk_3`;

-- AlterTable
ALTER TABLE `Track` DROP COLUMN `album_id`;

-- AddForeignKey
ALTER TABLE `Users_tracks` ADD CONSTRAINT `users_tracks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Users_tracks` ADD CONSTRAINT `users_tracks_ibfk_2` FOREIGN KEY (`track_id`) REFERENCES `Track`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Users_tracks` ADD CONSTRAINT `users_tracks_ibfk_3` FOREIGN KEY (`album_id`) REFERENCES `Album`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
