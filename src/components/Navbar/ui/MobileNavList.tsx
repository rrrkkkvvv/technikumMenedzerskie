import { headerLinkNames } from "../../../constants/stringConstants";
import NavLink from "../../../ui/NavLink";
import shortid from "shortid";
import { nav__list, nav__item, nav__link } from "../styles/Navbar.module.scss";
export const MobileNavList = () => (
  <ul className={nav__list}>
    {headerLinkNames.map((el) => (
      <li className={nav__item} key={shortid.generate()}>
        <NavLink url={el.path} className={nav__link}>
          {el.name}
        </NavLink>
      </li>
    ))}
  </ul>
);
