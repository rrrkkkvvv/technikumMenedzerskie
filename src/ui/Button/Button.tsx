import { IUIProps } from "../../shared/types/IUIProps";

const Button = ({ children, className }: IUIProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;
