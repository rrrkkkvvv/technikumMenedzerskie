import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { MobileNavList } from "./ui/MobileNavList";
import { MenuToggle } from "./ui/MobileNavToggle";
import { background } from "./styles/Navbar.module.scss";

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

export const MobileNavbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div className={background} variants={sidebar} />
      <MobileNavList />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
