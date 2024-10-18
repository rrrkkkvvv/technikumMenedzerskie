import React from "react";

interface ILinkProps {
  url: string;
  children: React.ReactNode;
}

const NavLink = ({ url, children }: ILinkProps) => {
  return <a href={url}>{children}</a>;
};

export default NavLink;
