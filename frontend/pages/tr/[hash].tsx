import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUsersTrackQuery } from '../../lib/getUsersTrackQuery';
import Greeting from '../../components/Greeting';
import CallPageContainer from '../../components/CallPageContainer';
import Prompt from '../../components/Prompt';
import Background from '../../components/Background';
import dynamic from 'next/dynamic';
import Upload from '../../components/Upload';
import Thanks from '../../components/Thanks';

const AudioPlayer = dynamic(() => import('../../components/AudioPlayer'), {ssr: false})


const UserTrack = () => {
  const router = useRouter();

  const [getUsersTracks, { data, error, loading }] = useUsersTrackQuery();

  useEffect(() => {
    if (!router.isReady || !router.query.hash) return;
    getUsersTracks({
      variables: {
        usersTracksWhereUniqueInput: {
          url_hash: router.query.hash,
        },
      },
    });
  }, [router.isReady, router.query.hash, getUsersTracks]);

  useEffect(() => {
    if(data){
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
    if (loading) {
      return;
    } else if (!loading && data) {
      return () => {
        console.log(data);
      };
    }
  }, [loading, data, error]);



  return (
    <div>
      <Background />
      <div>
        {data && data.usersTrack && data.usersTrack.Track === null ? (
          <CallPageContainer>
            <Greeting name={data.usersTrack.User.user_name} />
            <Prompt prompt={data.usersTrack.Album.album_prompt} />
            <Upload usersTrack={data.usersTrack}/>
          </CallPageContainer>
        ) : data && data.usersTrack && data.usersTrack.Track.is_uploaded === true ? (<>
        <Greeting name={data?.usersTrack.User.user_name}/>
        <AudioPlayer url={data?.usersTrack.Track.wav_cloudinary_url}/>
      <Thanks prompt={'thanks for your submission!!! Listen to it here.\n Or resubmit by clicking here. This will remove your existing track'}/>
        </>) : (<></>)}
      </div>
    </div>
  );
};

export default UserTrack;
