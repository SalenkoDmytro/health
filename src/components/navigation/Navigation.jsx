import PropTypes from 'prop-types';
import { NavLinks, List, AccentLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectUDBodyParams } from '../../redux/userData/userDataSelectors';

function Navigation({ closeMobMenu }) {
  const notShowDiary = useSelector(selectUDBodyParams)

  return (
    <List>
      <li>
        {notShowDiary.weight ? <AccentLink to='/diary' onClick={closeMobMenu}>
          Дневник
        </AccentLink> : null}
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
