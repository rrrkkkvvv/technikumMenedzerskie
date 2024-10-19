interface ITextProps {
  children: React.ReactNode;
  className: string;
}
const Text = ({ children, className }: ITextProps) => {
  return <p className={className}>{children}</p>;
};

export default Text;
