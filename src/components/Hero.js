import Button from "./Button";
import Player from "./Player";

const Hero = () => {
  return (
    <div className="hero">
      <div className="inner">

        <div className="hero-container">
          <div className="hero-left">
            <div>
              <p>White label booking software for agencies</p>
              <p>SELL OASIS’S brandable scheduling platform as you own</p>
              <p>Oasis Whote Label is the perfect solution for digital agencies and web developers working with clients who need a powerful booking system for their operation</p>
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
}

export default Hero;
