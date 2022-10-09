import useMatchMedia from 'hooks/useMatchMedia';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { selectUserName } from 'redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import { Wrapper, Text, Button, Box, BackButton } from './UserInfo.styled';

function UserInfo() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const { isMobile } = useMatchMedia();
  const location = useLocation();

  return (
    <Wrapper>
      {isMobile && (
        <BackButton
          to=""
          onClick={() => console.log(location)}
          state={{ from: location }}
        >
          <IoReturnDownBackSharp size={25} />
        </BackButton>
      )}
      <Box>
        <Text>{userName}</Text>
        <Button type="button" onClick={() => dispatch(logout())}>
          Выйти
        </Button>
      </Box>
    </Wrapper>
  );
}
export default UserInfo;
