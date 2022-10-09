import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { selectUser } from 'redux/user/userSelectors';

function UserInfo() {
  const isLogin = useSelector(selectUser);
  const userName = useSelector(selectUserName);
  console.log(userName);
  return <>{isLogin ? <p>{userName}</p> : <p>Noot logined</p>}</>;
}
export default UserInfo;
