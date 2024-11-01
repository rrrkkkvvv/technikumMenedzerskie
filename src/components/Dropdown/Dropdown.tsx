import { useState } from "react";
import { motion } from "framer-motion";
import {
  menu,
  dropdown__ul,
  dropdown__li,
  dropdown__button,
} from "./styles/Dropdown.module.scss";
import { Link } from "react-router-dom";
import { dropdownLinkNames } from "../../constants/stringConstants";
import NavLink from "../../ui/NavLink";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={menu}
    >
      <motion.button
        className={dropdown__button}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>O szkole</span>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className={dropdown__ul}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            height: "auto",
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            opacity: 0,
            height: 0,
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {dropdownLinkNames.map((el, index) => (
          <motion.li
            className={dropdown__li}
            key={index}
            variants={itemVariants}
          >
            <NavLink className="" url={el.path}>
              {el.name}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Dropdown;
