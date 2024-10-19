import React from "react";

interface ILinkProps {
  url: string;
  children: React.ReactNode;
}

const NavLink = ({ url, children }: ILinkProps) => {
  return (
    <a target="_blank" href={url}>
      {children}
    </a>
  );
};

export default NavLink;
