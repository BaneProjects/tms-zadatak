import Card from "./Card";
import star from "../assets/star.png";
import group_icon from "../assets/group_1238.png";
import icon2 from "../assets/icon2.png";




const Footer = () => {

  const cards = [
    {
      bigIcon: group_icon,
      smallIcon: star,
      rating: '5.0',
      title: 'Rating on Captera'
    },
    {
      bigIcon: group_icon,
      smallIcon: star,
      rating: '5.0',
      title: 'Rating on Captera'
    },
    {
      bigIcon: group_icon,
      smallIcon: star,
      rating: '5.0',
      title: 'Rating on Captera'
    },
    {
      bigIcon: group_icon,
      smallIcon: star,
      rating: '5.0',
      title: 'Rating on Captera'
    },
  ];


  return (
    <div className="footer">
      <div className="inner">
        <div className="card-special desktop-only">
          <img src={icon2} />
          <div>
            <div><b>1500+</b></div>
            <div>GLOBAL AGENCIES</div>
          </div>
        </div>
        <div className="card-special-text mobile-and-tablet">Over 15, 500 global customers</div>
        {
          cards.map((card, index) => {
            return (
              <Card
                bigIcon={card.bigIcon}
                smallIcon={card.smallIcon}
                rating={card.rating}
                title={card.title}
              />
            );
          })
        }


      </div>
    </div>
  );
}

export default Footer;