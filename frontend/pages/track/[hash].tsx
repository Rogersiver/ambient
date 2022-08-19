import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUsersTrackQuery } from '../getUsersTrackQuery';

const userTrack = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady || !router.query.hash) return;
    console.log(router.query.hash);
    getUsersTracks({
      variables: {
        usersTracksWhereUniqueInput: {
          url_hash: router.query.hash,
        },
      },
    });
  }, [router.isReady, router.query.hash]);

  const [getUsersTracks, { data, error, loading }] = useUsersTrackQuery();

  useEffect(() => {
    if(data){
      const {usersTrack} = data;
      console.log(usersTrack);
    }
    if (error) {
      console.log(error);
    }
    if (loading) {
      return;
    } else if (!loading && data) {
      return () => {
        // console.log(data);
      };
    }
  }, [loading, data, error]);

  return (
    <div>
      <div>
        {data && data.usersTrack && <h1>Hello {data.usersTrack.User.user_name}</h1>}
        {JSON.stringify(data)}</div>
    </div>
  );
};

export default userTrack;
