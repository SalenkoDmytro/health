import AuthNavigation from 'components/authNavigation';
import Logo from 'components/logo/Logo';
import Navigation from 'components/navigation';
import UserInfo from 'components/userInfo/UserInfo';
import useMatchMedia from 'hooks/useMatchMedia';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { HeaderStyled, MobMenuButton, MobMenu } from './Header.styled';

function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const isLogin = useSelector(selectIsLoggedIn);
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  const toggleMenu = () => {
    setMobileMenuIsOpen(mobileMenuIsOpen => !mobileMenuIsOpen);
  };

  const closeMobMenu = () => {
    setMobileMenuIsOpen(false);
  };

  return (
    <>
      <HeaderStyled>
        {isLogin ? (
          <>
            <Logo />
            {isTablet && <UserInfo />}
            {isDesktop ? (
              <>
                <Navigation />
                <UserInfo />
              </>
            ) : (
              <MobMenuButton
                type="button"
                aria-label="burger-menu"
                onClick={toggleMenu}
              >
                <GiHamburgerMenu size={24} />
              </MobMenuButton>
            )}
          </>
        ) : (
          <>
            <Logo />
            <AuthNavigation />
          </>
        )}
      </HeaderStyled>
      {isMobile && isLogin && !mobileMenuIsOpen && <UserInfo />}
      {!isDesktop && isLogin && mobileMenuIsOpen && (
        <MobMenu>
          <Navigation closeMobMenu={closeMobMenu} />
        </MobMenu>
      )}
    </>
  );
}

export default Header;
