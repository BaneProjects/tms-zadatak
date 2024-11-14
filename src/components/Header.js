import { useEffect, useRef, useState } from "react";
import oasisLogo from "../assets/navimages/oasis-logo.png";
import oasisText from "../assets/navimages/oasis-text.png";
import burgerMenu from "../assets/navimages/burger-menu.png";
import close from "../assets/navimages/close.png";
import Nav from "./Nav";
import Dropdown from "./Dropdown";

const Header = () => {
  const refInside = useRef(null);

  const [navOpened, setNavOpened] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const toogleNav = () => {
    if (navOpened) {
      setNavOpened(false);
    } else {
      setNavOpened(true);
    }
  }

  useEffect(() => {
    if (navOpened) {
      document.body.classList.add("nav-opened");
    } else {
      document.body.classList.remove("nav-opened");
    }
  }, [navOpened]);

  const handleClickCaret = (e) => {    
    setDropdownOpened(dropdownOpened => {
      if (dropdownOpened) {
        return false;
      } else {
        return true;
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (refInside.current && !refInside.current.contains(e.target)) {
        if (!e.target.classList.contains("with-dropdown")) {
          setDropdownOpened(false);
        } 
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refInside]);

  return (
    <div className="header">
      {
        dropdownOpened && (
          <Dropdown refInside={refInside} />
        )
      }
      <div className="inner">
        <div className="up-header desktop-only">
          <div>Log in</div>
          <div>Sign Up</div>
        </div>
        <div className="navi">
          <div className="logo">
            <img src={oasisLogo} alt=""></img>
            <img className="tablet-end-desktop" src={oasisText} alt=""></img>
          </div>
          <Nav handleClickCaret={handleClickCaret} />
          <div className="nav-right">
            <div className="login">Log in</div>
            <div onClick={toogleNav} className="burger-icon">
              {
                navOpened ? (
                  <img src={close} alt="" />
                ) : (
                  <img src={burgerMenu} alt="" />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;