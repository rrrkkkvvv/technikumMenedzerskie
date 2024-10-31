import { headerLinkNames } from "../../constants/stringConstants";
import NavLink from "../../ui/NavLink";
import "./styles/Navbar.module.scss";
import shortid from "shortid";

const Navbar = () => {
  return (
    <nav className="navbar">
      {headerLinkNames.map((el) => (
        <NavLink className="" key={shortid.generate()} url={el.path}>
          {el.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
