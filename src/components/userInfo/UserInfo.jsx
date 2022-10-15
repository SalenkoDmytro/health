import useMatchMedia from 'hooks/useMatchMedia';
import { useSelector, useDispatch } from 'react-redux';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import { Wrapper, Text, Button, Box, BackButton } from './UserInfo.styled';

import { resetStateDailySlice } from 'redux/daily/dailySlice';
import { resetStateProductSlice } from 'redux/productSearch/productSearchSlice';

function UserInfo({ closeModal, isOpen }) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const { isMobile } = useMatchMedia();
  const isLogin = useSelector(selectIsLoggedIn);

  const logoutState = () => {
    dispatch(resetStateProductSlice());
    dispatch(resetStateDailySlice());
    dispatch(logout());
  };

  return (
    <Wrapper>
      {isMobile && isOpen && (
        <BackButton type="button" onClick={() => closeModal()}>
          <IoReturnDownBackSharp size={25} />
        </BackButton>
      )}
      {isLogin && (
        <Box>
          <Text>{userName}</Text>
          <Button type="button" onClick={() => logoutState()}>
            Выйти
          </Button>
        </Box>
      )}
    </Wrapper>
  );
}
export default UserInfo;
