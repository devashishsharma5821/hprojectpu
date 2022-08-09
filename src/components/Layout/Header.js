import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import SvgIconsSize from '../Icon/Icon';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <ul>
          <li className={classes.Icon} >
            <NavLink activeClassName={classes.active} to='/' >
              <SvgIconsSize />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/'>
                 Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/about' >
                 About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
