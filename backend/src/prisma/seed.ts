import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

  await prisma.album.deleteMany();
  const album = await prisma.album.create({
    data: {
      album_name: 'Sleep-000',
      album_prompt:
        'Its me Roger. Through a website, I guess. I am inviting you to work with me on a simple collaborative ambient music project where each of you submit a song, and at the end you will receive an album containing everyones submissions. I plan on putting it on streaming services and making visuals to accompany yalls work. You can choose to be attributed by your name or just under "Various artists". \n Theres one rule: You need to be able to sleep through your track. Think of this just as an exercise, you can submit just a drone or a feild recording if you see fit. Submissions are due by the end of October.',
      art_cloudinary_url: null,
      total_desired_tracks: 6,
    },
  });
  console.log(album);

  await prisma.user.deleteMany();
  const jason = await prisma.user.create({
    data: {
      user_name: 'Jason',
      is_admin: false,
      insta: '',
    },
  });

  const userTrack = await prisma.users_tracks.create({
    data: {
      stream_service_name: '',
      secret_key: 'jimjam',
      url_hash: 'a74bao8r',
      user_id: jason.id,
      track_id: null,
      album_id: album.id,
    },
  });
  console.log(userTrack);

  const ben = await prisma.user.create({
    data: {
      user_name: 'Ben',
      is_admin: false,
      insta: 'zzlew',
    },
  });
  console.log(ben);

  const userTrack2 = await prisma.users_tracks.create({
    data: {
      stream_service_name: '',
      secret_key: 'weedradius',
      url_hash: 'gs257fzz',
      user_id: ben.id,
      track_id: null,
      album_id: album.id,
    },
  });
  console.log(userTrack2);

  const deej = await prisma.user.create({
    data: {
      user_name: 'Deej',
      is_admin: false,
      insta: '_dale_jr',
    },
  });
  console.log(deej);

  const userTrack3 = await prisma.users_tracks.create({
    data: {
      stream_service_name: '',
      secret_key: 'actasif',
      url_hash: 'd33j',
      user_id: deej.id,
      track_id: null,
      album_id: album.id,
    },
  });
  console.log(userTrack3);

  const scott = await prisma.user.create({
    data: {
      user_name: 'Scott',
      is_admin: false,
      insta: 'soup.3d',
    },
  });
  console.log(scott);

  const userTrack4 = await prisma.users_tracks.create({
    data: {
      stream_service_name: '',
      secret_key: 'mothership',
      url_hash: 'soup418el',
      user_id: scott.id,
      track_id: null,
      album_id: album.id,
    },
  });
  console.log(userTrack4);

  const djx = await prisma.user.create({
    data: {
      user_name: 'X',
      is_admin: false,
      insta: 'djx.life',
    },
  });
  console.log(djx);

  const userTrack5 = await prisma.users_tracks.create({
    data: {
      stream_service_name: '',
      secret_key: 'londonbridge',
      url_hash: 'ahg24e4478',
      user_id: djx.id,
      track_id: null,
      album_id: album.id,
    },
  });
  console.log(userTrack5);

  const roger = await prisma.user.create({
    data: {
      user_name: 'Roger',
      is_admin: true,
      insta: 'rogersiver',
    },
  });
  console.log(roger);

  const userTrack6 = await prisma.users_tracks.create({
    data: {
      stream_service_name: '',
      secret_key: 'devops',
      url_hash: 'roger',
      user_id: roger.id,
      track_id: null,
      album_id: album.id,
    },
  });
  console.log(userTrack6);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
