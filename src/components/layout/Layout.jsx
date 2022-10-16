import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Loader from '../Loader';
import { BoxStyled, Wrapper, Main } from './Layout.styled';
import useMatchMedia from 'hooks/useMatchMedia';

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
