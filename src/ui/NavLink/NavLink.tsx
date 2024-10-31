import React from "react";
import { IUIProps } from "../../shared/types/IUIProps";

interface ILinkProps extends IUIProps {
  url: string;
}

const NavLink = ({ url, children }: ILinkProps) => {
  return (
    <a target="_blank" href={url}>
      {children}
    </a>
  );
};

export default NavLink;
