import { useState } from "react";
import { MobileNavList } from "./ui/MobileNavList";
import {
  mobile__navbar,
  open,
  menu__btn,
  menu__content,
  close,
  line,
} from "./styles/Navbar.module.scss";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={mobile__navbar}>
      <div
        onClick={handleOpen}
        className={`${menu__btn}  ${isOpen ? close : ""}`}
      >
        <div className={line}></div>
      </div>
      <div className={`${menu__content} ${isOpen && open}`}>
        <MobileNavList />
      </div>
    </nav>
  );
};
