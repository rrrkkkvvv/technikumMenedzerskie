import { TFacultInfo } from "../../shared/types/TFacultInfo";
import Text from "../../ui/Text";
import Picture from "../../ui/Picture";
import Title from "../../ui/Title";
import "./styles/Card.module.scss";

interface ICardProps {
  facultInfo: TFacultInfo;
}

const Card = ({ facultInfo: { imgUrl, title, text } }: ICardProps) => {
  return (
    <div className="cardWrapper">
      <Picture className="" src={imgUrl} alt={title + " image"} />
      <Title className="">{title}</Title>
      <Text className="">{text}</Text>
    </div>
  );
};

export default Card;
