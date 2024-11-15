import Button from "./Button";
import Player from "./Player";

const Hero = () => {
  return (
    <div className="hero">
      <div className="inner">

        <div className="hero-container">
          <div className="hero-left">
            <div>
              <div className="text-top">White label booking software for agencies</div>
              <div className="main-text">Sell Oasis’s <span>brandable scheduling platform</span> as your own</div>
              <div className="text-bottom">Oasis White Label is the perfect solution for digital agencies and web developers working with clients who need a powerful booking system for their operation.</div>
            </div>
            <div className="buttons">
              <div>
                <Button blue title="Get started for free" />
                <div>✓ No credit card required</div>
              </div>
              <Button title="Book a demo" />
            </div>
          </div>

          <div className="hero-right">
            <Player />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
