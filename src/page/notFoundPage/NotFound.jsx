import { Image, BoxStyled } from './NotFoundPage.styled';

const NotFound = () => {
  return (
    <>
      <Image>
        <BoxStyled>
          <h1>404</h1>
          <p>It looks like this page is not in our system.</p>
        </BoxStyled>
      </Image>
    </>
  );
};

export default NotFound;
