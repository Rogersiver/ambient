import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      user_name: 'roger',
      is_admin: true,
      insta: '@rogersiver',
    },
  });
  console.log(user);
  const album = await prisma.album.create({
    data: {
      album_name: 'Sleep-Labs-000',
      album_prompt:
        'Ambient music is a genre of music that emphasizes tone and atmosphere over traditional musical structure or rhythm. It may lack net composition, beat, or structured melody. It uses textural layers of sound which can reward both passive and active listening and encourage a sense of calm or contemplation.',
      art_cloudinary_url: null,
      total_desired_tracks: 10,
    },
  });
  console.log(album);
  const track = await prisma.track.create({
    data: {
      track_name: 'ambient-001',
      track_description: 'sleepytime',
      is_uploaded: false,
      is_processed: false,
      wav_cloudinary_url: '',
      wvfrm_cloudinary_url: '',
      mp3_cloudinary_url: '',
    },
  });
  console.log(track);
  const userTrack = await prisma.users_tracks.create({
    data: {
      stream_service_name: '',
      secret_key: '',
      url_hash: 'a74bao8r',
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
