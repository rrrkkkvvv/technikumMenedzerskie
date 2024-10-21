import { motion, useCycle } from "framer-motion";
import Navbar from "../../components/Navbar";
import Logo from "../../ui/Logo";
import { header, background } from "./styles/Header.module.scss";
import { useRef } from "react";
import { MobileNavbar } from "../../components/Navbar/MobileNavbar";
import { MenuToggle } from "../../components/Navbar/ui/MobileNavToggle";
import MediaQuery from "react-responsive";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div className={background} variants={sidebar} />
      <MobileNavbar />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

const Header = () => {
  return (
    <header className={header}>
      <Logo />
      <MediaQuery maxWidth={1024}>
        <MobileNavBar />
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <Navbar />
      </MediaQuery>
    </header>
  );
};

export default Header;
