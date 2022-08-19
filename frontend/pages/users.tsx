import React from 'react';
import { useUsersQuery } from './getUsersQuery';
import { User } from '../lib/types/user';
import { useEffect } from 'react';

import UserList from '../components/UserList';

const Users = () => {
  const { data, error, loading } = useUsersQuery();

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
      {data && <UserList users={data.users}>{JSON.stringify(data)}</UserList>}
    </div>
  );
};

export default Users;
