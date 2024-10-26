import Navbar from "../../components/Navbar";
import Logo from "../../ui/Logo";
import { header } from "./styles/Header.module.scss";
import MediaQuery from "react-responsive";
import { MobileNavbar } from "../../components/Navbar/MobileNavbar";

const Header = () => {
  return (
    <header className={header}>
      <Logo />
      <MediaQuery maxWidth={1024}>
        <MobileNavbar />
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <Navbar />
      </MediaQuery>
    </header>
  );
};

export default Header;
