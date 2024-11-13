import Button from "./Button";
import caret from "../assets/caret.png";
import caretBlue from "../assets/caret-blue.png";

const Nav = ({ handleClickCaret }) => {
  return (
    <nav>
      <div className="nav-item" onClick={handleClickCaret}>Features<span class="caret-white"><img src={caret} /></span></div>
      <div className="nav-item">Demos</div>
      <div className="nav-item" onClick={handleClickCaret}>Who’ it for<span class="caret-white"><img src={caret} /></span><span class="caret-blue"><img src={caretBlue} /></span></div>
      <div className="nav-item" onClick={handleClickCaret}>Resources<span class="caret-white"><img src={caret} /></span></div>
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
