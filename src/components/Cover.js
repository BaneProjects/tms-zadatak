import Countdown from "./Countdown";


const Cover = () => {
  return (
    <div className="cover">

      <div className="inner">
        <div className="promo-title">
          <div>Black Friday</div>
          <div>Cyber Monday</div>
        </div>

        <div className="tablet-end-desktop">
          <Countdown/>
        </div>

        <div className="shop-now">Shop Now</div>
      </div>

    </div>
  );
}

export default Cover; 