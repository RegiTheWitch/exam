import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <p className="header__logo">Flowers.ru</p>
      </NavLink>
      <NavLink to="/cart" className="header__link">
        Корзина
      </NavLink>
    </header>
  );
};
