import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string
};

export const PageNavLink: React.FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item', {
        'is-active': isActive,
      },
    )}
  >
    {text}
  </NavLink>
);