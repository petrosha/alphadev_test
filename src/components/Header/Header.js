import "./Header.css";
import { ReactComponent as Logo } from "../Logo/Logo.svg";
import SignUp from "../Sign-up/Sign-up";
import Menu from "../Menu/Menu";

import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import {uiActions} from "../../store/ui-slice.js";


const Header = () => {
  const [headerClass, setHeaderClass] = useState("header");

  const onWindowScroll = () => {
    if (window.pageYOffset > 150) setHeaderClass("header header__dimming");
    else setHeaderClass("header");
  };

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  const visibleMenuCompact = useSelector((state) => state.ui.visibleMenuCompact)
  const dispatch = useDispatch();

  const onMenuClick = () =>{
    dispatch(uiActions.setVisibleMenuCompact());    // setVisibleMenuCompact(true);
  }

  const onMenuCloseClick = () =>{
    dispatch(uiActions.setInVisibleMenuCompact());
  }

  return (
    <div className={headerClass}>
      <div className="wrapper">
        <div className="header__innerbox">
          <Logo />
          <Menu />
          <SignUp />
        </div>
        <div className="header__innerbox_smallscreen">
          <Logo />
          <img onClick={onMenuClick} className="header__menu" alt="menu" src="/images/menu.png" />
        </div>
      </div>
      {visibleMenuCompact && (
        <div className="header__menu-compact">
          <img
            onClick={onMenuCloseClick}
            className="header__menu-compact_close"
            alt="close menu"
            src="/images/menu-close.png"
          />
          <Logo />
          <Menu />
          <SignUp />
        </div>
      )}
    </div>
  );
};

export default Header;
