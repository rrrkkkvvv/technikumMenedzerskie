import { IUIProps } from "../../shared/types/IUIProps";

const Title = ({ children, className }: IUIProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default Title;
