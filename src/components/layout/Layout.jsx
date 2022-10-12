import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Loader from '../Loader';
import { BoxStyled } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <main
          style={
            {
              // marginTop: '100px',
              // paddingBottom: '30px',
            }
          }
        >
          <BoxStyled as={'section'}>
            <Outlet />
          </BoxStyled>
        </main>
      </Suspense>

      <Footer />
    </>

  );
};

Layout.propTypes = {
  Outlet: PropTypes.node,
};

export default Layout;
