import useMatchMedia from 'hooks/useMatchMedia';
import { useSelector, useDispatch } from 'react-redux';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import useToggleModal from 'hooks/toggleModal/useToggleModal';
import { selectUserName } from 'redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import { Wrapper, Text, Button, Box, BackButton } from './UserInfo.styled';

function UserInfo() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const { isMobile } = useMatchMedia();
  const { isOpen, closeModal, hasBtnClose = true } = useToggleModal();

  // console.log('Mitya', isOpen);
  return (
    <Wrapper>
      {isMobile && isOpen && (
        <BackButton type="button" onClick={() => closeModal()}>
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
