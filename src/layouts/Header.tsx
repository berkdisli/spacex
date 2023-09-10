import { Link } from "react-router-dom";

import { GiEarthAmerica } from "react-icons/gi";

const Header = () => {

  return (
    <nav>
      <Link to="/" className="nav-link">
        <GiEarthAmerica className="icon" />
      </Link>
      <div className="nav-link"></div>
    </nav>
  );
};

export default Header;
