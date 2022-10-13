import PropTypes from 'prop-types';
import { NavLinks, List, AccentLink } from './Navigation.styled';

function Navigation({ closeMobMenu }) {
  return (
    <List>
      <li>
        <AccentLink to="/diary" onClick={closeMobMenu}>
          Дневник
        </AccentLink>
      </li>
      <li>
        <NavLinks to="/calculator" onClick={closeMobMenu}>
          Калькулятор
        </NavLinks>
      </li>
    </List>
  );
}

export default Navigation;

Navigation.propTypes = { closeMobMenu: PropTypes.func };
