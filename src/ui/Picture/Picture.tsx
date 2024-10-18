interface IPictureProps {
  className?: string;
  src: string;
  alt: string;
}

const Picture = ({ src, alt, className }: IPictureProps) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Picture;
