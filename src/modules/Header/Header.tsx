import Navbar from "../../components/Navbar";
import Logo from "../../ui/Logo";
import styles from "./styles/Header.module.scss";

const Header = () => {
  return (
    <header className="">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
