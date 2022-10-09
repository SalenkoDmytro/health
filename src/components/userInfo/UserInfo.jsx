import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import { Wrapper, Text, Button } from './UserInfo.styled';

function UserInfo() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <Wrapper>
      <Text>{userName}</Text>
      <Button type="button" onClick={() => dispatch(logout())}>
        Выйти
      </Button>
    </Wrapper>
  );
}
export default UserInfo;
