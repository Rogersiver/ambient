import react, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUsersTrackQuery } from '../getUsersTrackQuery';
import Greeting from '../../components/Greeting';
import dynamic from 'next/dynamic';
import CallPageContainer from '../../components/CallPageContainer';
import Prompt from '../../components/Prompt';
import Background from '../../components/Background';
import styled from 'styled-components';
// import Sketch from 'react-p5';

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
        {data && data.usersTrack && (
          <CallPageContainer>
            <Greeting name={data.usersTrack.User.user_name} />
            <Prompt prompt={data.usersTrack.Album.album_prompt} />
          </CallPageContainer>
        )}
      </div>
    </div>
  );
};

export default UserTrack;
