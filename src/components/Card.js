const Card = ({ bigIcon, smallIcon, rating, title }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={bigIcon} alt="icon" />
        <div>
          <div><img src={smallIcon} alt="rating" />{rating}</div>
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;