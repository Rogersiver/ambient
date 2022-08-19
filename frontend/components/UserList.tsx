import styled, { DefaultTheme } from 'styled-components';
import { up, down, between, only } from 'styled-breakpoints';

const Header = styled.h2`
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

const ListContainer = styled.ul`
  list-style: none;
  min-width: 350px;
  max-width: 99vh;
  margin: auto;
`;

const Divider = styled.hr`
  max-width: 350px;
  margin-left: 0;
`;

const Id = styled.span`
  padding: 1vh;
  margin: auto;
  ${down('md')} {
    margin-right: 10px;
  }
`;

const ListItemContainer = styled.li`
  background-color: ${(props) => props.theme.palette.colors.gray['900']};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid white;
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
  padding: 1vh;
  ${down('sm')} {
    padding: 0vh;
  }
  flex: 1 1 70%;
`;

const ListItemActions = styled.div`
  flex: 1 1 30%;
`;

const ListItemActionsContent = styled.div`
  margin: auto;
  text-align: center;
`;

const ListItemName = styled.span`
  font-weight: bold;
`;

const ListItemData = styled.span``;

const UserListItem = (props: any) => {
  const { user } = props;
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
          <ListItemData>
            {new Date(user.created_at).toLocaleString()}
          </ListItemData>
          <br />
        </ListItemContent>
        <ListItemActions>
          <ListItemActionsContent>
            <p>Actions</p>
          </ListItemActionsContent>
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
