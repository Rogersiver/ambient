import { gql, useQuery } from '@apollo/client';
import { User } from '../lib/types/user.d';
 
interface UsersQueryResponse {
  users: User[];
}
 
const GET_USERS = gql`
query Users {
  users {
    id
    user_name
    is_admin
    insta
    created_at
  }
}
`;
 
export function useUsersQuery() {
  return useQuery<UsersQueryResponse>(GET_USERS);
}