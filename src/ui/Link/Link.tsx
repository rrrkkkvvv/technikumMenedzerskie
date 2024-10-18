import React from "react";

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

const Link = ({ url, children }: LinkProps) => {
  return <a href={url}>{children}</a>;
};

export default Link;
