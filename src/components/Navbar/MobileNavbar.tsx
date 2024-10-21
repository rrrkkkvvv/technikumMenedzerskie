import { motion } from "framer-motion";
import { MobileNavLink } from "./ui/MobileNavLink";
import { headerLinkNames } from "../../constants/stringConstants";
import NavLink from "../../ui/NavLink";
import shortid from "shortid";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileNavbar = () => (
  <motion.ul variants={variants}>
    {headerLinkNames.map((el, i) => (
      <MobileNavLink key={i}>
        <NavLink key={shortid.generate()} url={el.path}>
          {el.name}
        </NavLink>
      </MobileNavLink>
    ))}
  </motion.ul>
);
