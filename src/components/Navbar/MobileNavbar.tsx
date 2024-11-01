import { useState } from "react";
import { MobileNavList } from "./ui/MobileNavList";
import { motion } from "framer-motion";

import {
  mobile__navbar,
  open,
  menu__btn,
  menu__content,
  close,
  line,
} from "./styles/Navbar.module.scss";
import Dropdown from "../Dropdown";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={mobile__navbar}>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div />
        <div className={`${menu__content} ${isOpen && open}`}>
          <MobileNavList isOpen={isOpen} />
          <Dropdown />
        </div>
        <div
          onClick={handleOpen}
          className={`${menu__btn}  ${isOpen ? close : ""}`}
        >
          <div className={line}></div>
        </div>
      </motion.nav>
    </nav>
  );
};
