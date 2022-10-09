import { useSelector } from 'react-redux';
import AuthNavigation from 'components/authNavigation';
import Logo from 'components/logo/Logo';
import Navigation from 'components/navigation';
import UserInfo from 'components/userInfo/UserInfo';
import { HeaderStyled } from './Header.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

function Header() {
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled>
      {isLogin ? (
        <>
          <Logo />
          <UserInfo />
          <Navigation />
        </>
      ) : (
        <>
          <Logo />
          <AuthNavigation />
        </>
      )}
    </HeaderStyled>
  );
}

export default Header;
