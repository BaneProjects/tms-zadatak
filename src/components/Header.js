import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
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
    setDropdownOpened(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (refInside.current && !refInside.current.contains(e.target)) {
        setDropdownOpened(false);
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
            LOGO
            <span className="tablet-end-desktop">OASIS</span>
          </div>
          <Nav handleClickCaret={handleClickCaret} />
          <div className="nav-right">
            <div className="">Log in</div>
            <div onClick={toogleNav} className="hamburger">
              {
                navOpened ? (
                  <CgClose />
                ) : (
                  <RxHamburgerMenu />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
