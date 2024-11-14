import Button from "./Button";
import caret from "../assets/navimages/caret.png";
import IconSilverimg from "../assets/navimages/IconSilverimg.png";
const Nav = ({ handleClickCaret }) => {
  return (
    <nav>
      <div className="nav-item" onClick={handleClickCaret}>Features<span className="caret-white"><img src={caret} alt="caret"/></span></div>
      <div className="nav-item">Demos</div>
      <div className="nav-item" onClick={handleClickCaret}>Who’ it for<span className="caret-white"><img src={caret} alt="caret"/></span><span className="caret-blue"><img src={IconSilverimg}  alt="caret"/></span></div>
      <div className="nav-item" onClick={handleClickCaret}>Resources<span className="caret-white"><img src={caret}  alt="caret"/></span></div>
      <div className="nav-item">About us</div>
      <div className="nav-item">Pricing</div>
      <div className="nav-item nav-item--btn mobile-and-tablet">
        <Button title="Sign Up" />
      </div>
      <div className="nav-item nav-item--btn">
        <Button gold title="Book a Demo" />
      </div>
    </nav>
  );
}

export default Nav;
