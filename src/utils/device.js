const size = {
  mobile: '320px',
  mobileOnly: '478px',
  fablet: '480px',
  fabletOnly: '766',
  tablet: '768px',
  noDesktop: '1198px',
  desktop: '1200px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,

  fablet: `(min-width: ${size.fablet})`,
  fabletOnly: `(min-width:${size.fablet}) and (max-width:#${size.fabletOnly})`,

  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `(min-width:${size.tablet}) and (max-width:#${size.noDesktop})`,

  noDesktop: `(max-width: ${size.noDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
