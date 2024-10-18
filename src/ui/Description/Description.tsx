interface IDescriptionProps {
  children: React.ReactNode;
  className: string;
}
const Description = ({ children, className }: IDescriptionProps) => {
  return <p className={className}>{children}</p>;
};

export default Description;
