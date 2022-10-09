import { NavLinks, List, AccentLink, Button } from './Navigation.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import useMatchMedia from 'hooks/useMatchMedia';

function Navigation() {
  const { isDesktop } = useMatchMedia();
  return (
    <>
      {!isDesktop && (
        <Button type="button" aria-label="burger-menu">
          <GiHamburgerMenu size={24} />
        </Button>
      )}
    </>
    // <List>
    //   <li>
    //     <AccentLink to="diary">Дневник</AccentLink>
    //   </li>
    //   <li>
    //     <NavLinks to="calculator">Калькулятор</NavLinks>
    //   </li>
    // </List>
  );
}

export default Navigation;
