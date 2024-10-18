import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className: string;
}

const Title = ({ children, className }: TitleProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default Title;
