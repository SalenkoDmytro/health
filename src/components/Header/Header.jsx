import AuthNavigation from 'components/authNavigation';
import Logo from 'components/logo/Logo';
import Navigation from 'components/Navigation';
import UserInfo from 'components/userInfo/UserInfo';
import useMatchMedia from 'hooks/toggleModal/useMatchMedia';
import { HeaderStyled } from './Header.styled';

function Header() {
  const { isMobile } = useMatchMedia();
  return (
    <HeaderStyled>
      <Logo />
      {/* <AuthNavigation /> */}
      {/* {!isLogin && (
        <>
          <Logo />
          <AuthNavigation />
        </>
      )} */}
      {/* <UserInfo /> */}
      <Navigation />
      {/* {isLogin ? (
        <>
          <UserInfo />
          <Navigation />
        </>
      ) : (
        <AuthNavigation />
      )} */}
    </HeaderStyled>
  );
}

export default Header;
