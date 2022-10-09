import { useState } from 'react';
import { useSelector } from 'react-redux';
import AuthNavigation from 'components/authNavigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from 'components/logo/Logo';
import Navigation from 'components/navigation';
import UserInfo from 'components/userInfo/UserInfo';
import { HeaderStyled, MobMenu, MobMenuButton } from './Header.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import useMatchMedia from 'hooks/useMatchMedia';

function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const isLogin = useSelector(selectIsLoggedIn);
  const { isDesktop, isTablet } = useMatchMedia();

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

      {!isDesktop && isLogin && mobileMenuIsOpen && (
        <MobMenu>
          <Navigation closeMobMenu={closeMobMenu} />
        </MobMenu>
      )}
    </>
  );
}

export default Header;
