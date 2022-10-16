import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import useToggleModal from 'hooks/toggleModal';

import Header from '../header';
import Footer from '../footer';
import UserInfo from 'components/userInfo';
import Loader from '../Loader';
import { BoxStyled, Wrapper, Main } from './Layout.styled';
import useMatchMedia from 'hooks/useMatchMedia';
// import useToggleModal from 'hooks/toggleModal';

const Layout = ({ closeModal, isOpen }) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  return (
    <Wrapper>
      <Header closeModal={closeModal} isOpen={isOpen} />
      <Suspense fallback={<Loader />}>
        <Main>
          <BoxStyled as={'section'}>
            <Outlet />
          </BoxStyled>
        </Main>

        {(isMobile && !isOpen && <Footer />) ||
          (isTablet && <Footer />) ||
          (isDesktop && <Footer />)}
      </Suspense>
    </Wrapper>
  );
};

Layout.propTypes = {
  Outlet: PropTypes.node,
};

export default Layout;
