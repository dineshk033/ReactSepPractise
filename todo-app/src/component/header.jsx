import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/task"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Task
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
