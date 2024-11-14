import Card from "./Card";
import starYelow from "../assets/footerimages/star.png";
import starRed from "../assets/footerimages/starRed.png";
import starGreen from "../assets/footerimages/starGreen.png";
import ratingLogos from "../assets/footerimages/ratingLogos.png";
import ratingLogos2 from "../assets/footerimages/ratingLogos2.png";
import ratingLogos3 from "../assets/footerimages/ratingLogos3.png";
import ratingLogos4 from "../assets/footerimages/ratingLogos4.png";

import iconGlobal from "../assets/footerimages/icon2.png";
;
const Footer = () => {

  const cards = [
    {
      bigIcon: ratingLogos,
      smallIcon: starYelow,
      rating: '5.0',
      title: 'Rating on Captera'
    },
    {
      bigIcon: ratingLogos2,
      smallIcon:starRed,
      rating: '4.6',
      title: 'Rating on G2'
    },
    {
      bigIcon: ratingLogos3,
      smallIcon: starGreen,
      rating: 'Excellent',
      title: 'on Trustpilot'
    },
    {
      bigIcon: ratingLogos4,
      smallIcon: starYelow,
      rating: '5/5',
      title: 'Rating on GetApp'
    },
  ];

  return (
    <div className="footer">
      <div className="inner">
        <div className="card-special desktop-only">
          <img src={iconGlobal} />
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
                key={index}
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
};

export default Footer;