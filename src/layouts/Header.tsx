import { Link } from "react-router-dom";
import { GiEarthAmerica } from "react-icons/gi";

const Header = () => {
  return (
    <nav>
      <h1 className="title">SpaceX Monitoring</h1>

      <Link to="/" className="nav-link">
        <GiEarthAmerica className="icon" />
      </Link>
      <div className="nav-link"></div>
    </nav>
  );
};

export default Header;
