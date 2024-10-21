import { headerLinkNames } from "../../constants/stringConstants";
import NavLink from "../../ui/NavLink";
import "./styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink url="#">{headerLinkNames.mainPageLink}</NavLink>
      <NavLink url="#">{headerLinkNames.admissionToSchoolLink}</NavLink>
      <NavLink url="#">{headerLinkNames.ourStaffLink}</NavLink>
      <NavLink url="#">{headerLinkNames.aboutSchoolLink}</NavLink>
      <NavLink url="#">{headerLinkNames.newsLink}</NavLink>
      <NavLink url="#">{headerLinkNames.contactLink}</NavLink>
      <NavLink url="#">{headerLinkNames.ukraineLink}</NavLink>
    </nav>
  );
};

export default Navbar;
