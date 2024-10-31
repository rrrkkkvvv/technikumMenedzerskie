import { Link } from "react-router-dom";
import { urls } from "../../constants/stringConstants";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={urls.siteRoutes.basename}>
        <img src="/public/icons/logo-1.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
