

const Card = ({bigIcon,smallIcon,rating,title}) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={bigIcon} />
        <div>
          <div><img src={smallIcon} />{rating}</div>
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;