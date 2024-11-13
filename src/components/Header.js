import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <div className="inner">
        <div className="up-header">
          <div>Log in</div>
          <div>Sign Up</div>
        </div>
        <div className="navi">
          <div className="logo">
            LOGO
            <span>OASIS</span>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
