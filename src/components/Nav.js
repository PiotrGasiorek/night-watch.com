import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
  return (
    <nav>
      <Logo/>
      <NavLink to="/" className={({ isActive }) =>
          "nav__link" + (isActive ? " nav__link--active" : "")
        }>
        Home
      </NavLink>
      <NavLink to="/my-movies" className={({ isActive }) =>
          "nav__link" + (isActive ? " nav__link--active" : "")
        }>
        My movies
      </NavLink>
    </nav>
  );
}

export default Nav;