import { useLayoutEffect } from 'react';
import { useState } from 'react';

const queries = [
  '(max-width: 767px)',
  '(min-width: 768px) and (max-width: 1199px)',
  '(min-width: 1200px)',
];

function useMatchMedia() {
  const mediaQueryList = queries.map(query => matchMedia(query));
  const getValues = () => mediaQueryList.map(mql => mql.matches);
  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryList.forEach(mql => mql.addEventListener('change', handler));
    return () =>
      mediaQueryList.forEach(mql => mql.removeEventListener('change', handler));
  });

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({ ...acc, [screen]: values[index] }),
    {}
  );
}

export default useMatchMedia;
