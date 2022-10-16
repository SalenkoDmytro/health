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
import { useLocation } from 'react-router-dom';
import useScrollLock from 'hooks/useScrollLock';

function Header({ closeModal, isOpen }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const isLogin = useSelector(selectIsLoggedIn);
  const { isDesktop, isTablet, isMobile } = useMatchMedia();
  const { pathname } = useLocation();
  const { lockScroll, UnlockScroll } = useScrollLock();

  const toggleMenu = () => {
    if (mobileMenuIsOpen) return closeMobMenu();
    setMobileMenuIsOpen(true);
    lockScroll();
  };

  const closeMobMenu = () => {
    setMobileMenuIsOpen(false);
    UnlockScroll();
  };

  return (
    <>
      <HeaderStyled
        className={isDesktop && pathname === '/diary' ? 'gradient' : null}
      >
        {isLogin ? (
          <>
            <Logo closeMobMenu={closeMobMenu} />
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

      {isMobile && !mobileMenuIsOpen && (
        <UserInfo closeModal={closeModal} isOpen={isOpen} />
      )}

      {!isDesktop && isLogin && mobileMenuIsOpen && (
        <MobMenu>
          <Navigation closeMobMenu={closeMobMenu} />
        </MobMenu>
      )}
    </>
  );
}

export default Header;
