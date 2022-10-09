import Box from 'components/common/box/Box';
import { Image } from './NotFoundPage.styled';
// import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Image>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column-reverse"
        justifyContent="center"
        alignItems="center"
        width={1 / 2}
        ml="auto"
        fontSize="xxl"
        color="#010101"
      >
        <h1>404</h1>
        <p>It looks like this page is not in our system.</p>
        {/* <NavLink>Head back home!</NavLink> */}
      </Box>
    </Image>
  );
};

export default NotFound;
