import { TFacultInfo } from "../../shared/types/FacultType";
import Description from "../../ui/Description";
import Picture from "../../ui/Picture";
import Title from "../../ui/Title";
interface ICardProps {
  facultInfo: TFacultInfo;
}

const Card = ({ facultInfo: { imgUrl, title, text } }: ICardProps) => {
  return (
    <div className="cardWrapper">
      <Picture className="" src={imgUrl} alt={title + " image"} />
      <Title className="">{title}</Title>
      <Description className="">{text}</Description>
    </div>
  );
};

export default Card;
