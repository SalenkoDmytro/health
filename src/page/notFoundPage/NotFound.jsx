import { Image, BoxStyled } from './NotFoundPage.styled';
import Header from '../../components/header';
import Footer from '../../components/footer';
// import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      {/* <Header /> */}
      <Image>
        <BoxStyled>
          <h1>404</h1>
          <p>It looks like this page is not in our system.</p>
          {/* <NavLink>Head back home!</NavLink> */}
        </BoxStyled>
      </Image>
      {/*<Footer/>*/}
    </>
  );
};

export default NotFound;
