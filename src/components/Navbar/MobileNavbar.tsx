import { motion } from "framer-motion";
import { MobileNavLink } from "./ui/MobileNavLink";
import { headerLinkNames } from "../../constants/stringConstants";

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
    {Object.values(headerLinkNames).map((value, i) => (
      <MobileNavLink key={i}>{value}</MobileNavLink>
    ))}
  </motion.ul>
);
