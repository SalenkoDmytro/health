import { NavLinks, List, AccentLink, Button } from './Navigation.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import useMatchMedia from 'hooks/toggleModal/useMatchMedia';

function Navigation() {
  const { isMobile, isTablet } = useMatchMedia();
  return (
    // <List>
    //   <li>
    //     <AccentLink to="diary">Дневник</AccentLink>
    //   </li>
    //   <li>
    //     <NavLinks to="calculator">Калькулятор</NavLinks>
    //   </li>
    // </List>
    <>
      {isTablet ||
        (isMobile && (
          <Button type="button" aria-label="burger-menu">
            <GiHamburgerMenu size={24} />
          </Button>
        ))}
    </>
  );
}

export default Navigation;
