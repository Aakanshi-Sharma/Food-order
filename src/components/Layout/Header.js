import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/th.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodVilla😋</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://validex.fr/wp-content/uploads/2019/10/food-waste-restaurant-validex.jpeg"
          alt="A table full of delicious food"
        />
      </div>
    </Fragment>
  );
};
export default Header;
