import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CardIcon from "../../Components/CardIcon/CardIcon";
import CartDropDown from "../../Components/CartDropDown/CartDropDown";

import { ReactComponent as Crownsvg } from "../../Assets/crown.svg";
import { signOutUser } from "../../utils/firebase";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
//import { ItemContext } from "../../Context/ItemContext";

import "./navigation.scss";

function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  //const { activeDropDown, setActiveDropDown } = useState(false);

  const { isOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Crownsvg className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span>Sign Out</span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
          <CardIcon />
          {isOpen && <CartDropDown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
