import React from "react";

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

const NavLink = ({ url, children }: LinkProps) => {
  return <a href={url}>{children}</a>;
};

export default NavLink;
