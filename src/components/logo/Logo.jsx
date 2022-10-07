import React from 'react';
import { Wrapper } from './Logo.styled';
import useMatchMedia from 'hooks/toggleModal/useMatchMedia';
import logoMob from '../../images/logo-min-mob.png';
import logoMobx2 from '../../images/logo-min-mob-x2.png';
import logoDesk from '../../images/logo-min-desc.png';
import logoDeskx2 from '../../images/logo-min-desc-x2.png';
import fullLogoMob from '../../images/logo-full-mob.png';
import fullLogoMobx2 from '../../images/logo-full-mob-x2.png';
import fullLogoTab from '../../images/logo-full-tab.png';
import fullLogoTabx2 from '../../images/logo-full-tab-x2.png';
import fullLogoDesk from '../../images/logo-full-desk.png';
import fullLogoDeskx2 from '../../images/logo-full-desc-x2.png';

function Logo() {
  const { isDesktop, isMobile, isTablet } = useMatchMedia();

  return (
    <Wrapper to="diary">
      {/* {!isDesktop && (
        <img
          src={logoMob}
          srcSet={`${logoMobx2} 2x`}
          alt="logo"
          width={47}
          height={44}
        />
      )}
      {isDesktop && (
        <img
          src={logoDesk}
          srcSet={`${logoDeskx2} 2x`}
          alt="logo"
          width={71}
          height={66}
        />
      )} */}

      {isMobile && (
        <img
          src={fullLogoMob}
          srcSet={`${fullLogoMobx2} 2x`}
          alt="logo"
          width={160}
          height={44}
        />
      )}
      {isTablet && (
        <img
          src={fullLogoTab}
          srcSet={`${fullLogoTabx2} 2x`}
          alt="logo"
          width={163}
          height={44}
        />
      )}
      {isDesktop && (
        <img
          src={fullLogoDesk}
          srcSet={`${fullLogoDeskx2} 2x`}
          alt="logo"
          width={167}
          height={66}
        />
      )}
    </Wrapper>
  );
}

export default Logo;
