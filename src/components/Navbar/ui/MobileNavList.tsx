import { headerLinkNames } from "../../../constants/stringConstants";
import NavLink from "../../../ui/NavLink";
import shortid from "shortid";
import { nav__list, nav__item, nav__link } from "../styles/Navbar.module.scss";
import { motion } from "framer-motion";

// Варианты для анимации каждого элемента списка
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: -20, // Начальное положение элементов немного выше
    transition: { duration: 0.2 },
  },
};

export const MobileNavList = ({ isOpen }: { isOpen: boolean }) => (
  <motion.ul
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
        // clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.3,
        },
      },
    }}
    style={{ pointerEvents: isOpen ? "auto" : "none" }}
    className={nav__list}
  >
    {headerLinkNames.map((el) => (
      <motion.li
        key={shortid.generate()}
        className={nav__item}
        variants={itemVariants} // Применяем анимацию к каждому элементу
      >
        <NavLink url={el.path} className={nav__link}>
          {el.name}
        </NavLink>
      </motion.li>
    ))}
  </motion.ul>
);
