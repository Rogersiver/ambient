import styled, { DefaultTheme } from 'styled-components';
import { up, down, between, only } from 'styled-breakpoints';

const Header = styled.h2`
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

const ListContainer = styled.ul`
  list-style: none;
  min-width: 350px; 
`;

const Divider = styled.hr`
  max-width: 350px;
  margin-left: 0;
`

const Id = styled.span`
  padding: 1vh;
  margin: auto;
  ${down('sm')} {
    margin-right: 10px;
  }
`;

const ListItemContainer = styled.li`
  background-color: ${(props) => props.theme.palette.common.black};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  padding: 1vh;
  margin-block: 4vh;
  margin-right: 4vh;
  ${down('sm')} {
    flex-direction: column;
  }
`;

const ListItemContent = styled.div`
  padding-bottom: 2vh;
  flex: 1 1 60%;
`;

const ListItemActions = styled.div`
  flex: 1 1 40%;
`;

const ListItemActionsContent = styled.div`
  width: full%;
  margin: 0 auto;
`;

const ListItemName = styled.span``;

const ListItemData = styled.span``;

const UserListItem = (props: any) => {
  const { user } = props;
  console.log(user);
  return (
    <div>
      <ListItemContainer>
        <ListItemContent>
          <Header>{user.user_name}</Header>
          <Divider />
          <ListItemName>instagram: </ListItemName>
          <ListItemData>{user.insta}</ListItemData>
          <br />
          <ListItemName>Created: </ListItemName>
          <ListItemData>{new Date(user.created_at).toLocaleString()}</ListItemData>
          <br />
          <ListItemName>isAdmin: </ListItemName>
          <ListItemData>{JSON.stringify(user.is_admin)}</ListItemData>
        </ListItemContent>
        <ListItemActions>
          <ListItemActionsContent>Actions Will Go Here</ListItemActionsContent>
        </ListItemActions>
        <Id>{user.id}</Id>
      </ListItemContainer>
    </div>
  );
};

const UserList = (props: any) => {
  const { users } = props;
  const list = users.map((user: any, i: number) => {
    return <UserListItem user={user} key={i} />;
  });
  return (
    <div>
      <ListContainer>{list}</ListContainer>
    </div>
  );
};

export default UserList;
