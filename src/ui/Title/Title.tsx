import { ReactNode } from "react";

interface ITitleProps {
  children: ReactNode;
  className: string;
}

const Title = ({ children, className }: ITitleProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default Title;
