import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      user_name: 'user',
      is_admin: true,
      insta: '@wonderlandbiiiitch',
    },
  });
  console.log(user);
  const album = await prisma.album.create({
    data: {
      album_name: 'best album ever',
      album_prompt: 'try to relax',
      album_art_url: null,
      total_desired_tracks: 10,
    },
  });
  console.log(album);
  const track = await prisma.track.create({
    data: {
      album_id: album.id,
      track_name: 'ambient-001',
      track_description: 'sleepytime',
    },
  });
  console.log(track);
  const userTrack = await prisma.users_tracks.create({
    data: {
      user_id: user.id,
      track_id: track.id,
      album_id: album.id,
    },
  });
  console.log(userTrack);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
