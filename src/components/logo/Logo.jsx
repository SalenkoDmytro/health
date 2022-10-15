import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import useMatchMedia from 'hooks/useMatchMedia';
import PropTypes from 'prop-types';

import logoMob from 'assets/images/logo/logo-min-mob.png';
import logoMobx2 from 'assets/images/logo/logo-min-mob-x2.png';
import fullLogoMob from 'assets/images/logo/logo-full-mob.png';
import fullLogoMobx2 from 'assets/images/logo/logo-full-mob-x2.png';
import fullLogoTab from 'assets/images/logo/logo-full-tab.png';
import fullLogoTabx2 from 'assets/images/logo/logo-full-tab-x2.png';
import fullLogoDesk from 'assets/images/logo/logo-full-desk.png';
import fullLogoDeskx2 from 'assets/images/logo/logo-full-desc-x2.png';

function Logo({ closeMobMenu }) {
  const { isDesktop, isMobile, isTablet } = useMatchMedia();
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <Link to={isLogin ? '/diary' : '/'} onClick={closeMobMenu}>
      {isMobile ? (
        isLogin ? (
          <img
            src={fullLogoMob}
            srcSet={`${fullLogoMobx2} 2x`}
            alt="logo"
            width={160}
            height={44}
          />
        ) : (
          <img
            src={logoMob}
            srcSet={`${logoMobx2} 2x`}
            alt="logo"
            width={47}
            height={44}
          />
        )
      ) : null}

      {isTablet ? (
        <img
          src={fullLogoTab}
          srcSet={`${fullLogoTabx2} 2x`}
          alt="logo"
          width={163}
          height={44}
        />
      ) : null}
      {isDesktop ? (
        <img
          src={fullLogoDesk}
          srcSet={`${fullLogoDeskx2} 2x`}
          alt="logo"
          width={167}
          height={66}
        />
      ) : null}
    </Link>
  );
}

export default Logo;

Logo.propTypes = { closeMobMenu: PropTypes.func };
