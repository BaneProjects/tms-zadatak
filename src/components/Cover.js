import Countdown from "./Countdown";


const Cover = () => {
  return (
    <div className="cover">

      <div className="inner">
        <div>
          <p>Black Friday</p>
          <p>Cyber Monday</p>
        </div>

        <div>
          <Countdown/>
        </div>

        <div>
          <p>Shop Now</p>
        </div>
      </div>

    </div>
  );
}

export default Cover; 