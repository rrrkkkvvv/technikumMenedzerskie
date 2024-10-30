import { headerLinkNames } from "../../../constants/stringConstants";
import NavLink from "../../../ui/NavLink";
import shortid from "shortid";

export const MobileNavList = () => (
  <>
    {headerLinkNames.map((el, i) => (
      <NavLink key={shortid.generate()} url={el.path}>
        {el.name}
      </NavLink>
    ))}
  </>
);
