import {
  titles,
  urls,
  footerLinkNames,
  contactInfo,
} from "../../constants/stringConstants";
import NavLink from "../../ui/NavLink";
import Text from "../../ui/Text";
import Title from "../../ui/Title";
import "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <Title className="">{titles.footerTitle}</Title>
      <div className="footer__adress">
        <NavLink url={urls.adress}>{footerLinkNames.adress}</NavLink>
      </div>
      <div className="footer__contactInfo">
        <NavLink url={urls.contactInfo.phone}>{contactInfo.phone}</NavLink>
        <NavLink url={urls.contactInfo.email}>{contactInfo.email}</NavLink>
        <Text className="">{contactInfo.nip}</Text>
      </div>
      <div className="footer__socialNetwork">
        <NavLink url={urls.socialNetwork.facebook}>faceico</NavLink>
        <NavLink url={urls.socialNetwork.instagram}>instaico</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
