import { fas } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/button";
import Search from "../search/Search";
import "./AppBar.css";

function AppBar() {
  return (
    <div className="AppBar">
      <div className="flex-1">
        <p className="brandName">Flipkart</p>
        <a href="#" className="subLink">
          Explore plus
        </a>
      </div>
      <div className="flex-2">
        <Search />
      </div>
      <div className="flex-1">
        <Button variant="primary" text="Login" />
      </div>
      <div className="flex-1">
        <Button variant="secondary" text="Become a Seller" />
      </div>
      <div className="flex-1">
        <Button
          variant="secondary"
          text="Cart"
          prefixIcon={fas.faCartShopping}
        />
      </div>
    </div>
  );
}

export default AppBar;
