import * as React from "react";
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

export const Navigation = () => (
  <motion.ul variants={variants}>
    {Object.values(headerLinkNames).map((value, i) => (
      <MobileNavLink i={value} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
