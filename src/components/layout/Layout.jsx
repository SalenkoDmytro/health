import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Loader from '../Loader';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <main style={{ marginBottom: '101px' }}>
          <Outlet />
        </main>
      </Suspense>
      {/*<Footer />*/}
    </div>
  );
};

Layout.propTypes = {
  Outlet: PropTypes.node,
};

export default Layout;
