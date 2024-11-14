import Button from "./Button";
import govermentImg from "../assets/dropdownimages/govermentImg.png";
import digitalBusinessesImg from "../assets/dropdownimages/digitalBusinessesImg.png";
import salesImg from "../assets/dropdownimages/salesImg.png";
import hrImg from "../assets/dropdownimages/hrImg.png";
import retailImg from "../assets/dropdownimages/retailImg.png";
import salonsImg from "../assets/dropdownimages/salonsImg.png";
import barberShopImg from "../assets/dropdownimages/barberShopImg.png";
import individualImg from "../assets/dropdownimages/individualImg.png";
import homeServicesImg from "../assets/dropdownimages/homeServicesImg.png";
import cleaningImg from "../assets/dropdownimages/cleaningImg.png";
import servicesImg from "../assets/dropdownimages/servicesImg.png";
import educationImg from "../assets/dropdownimages/educationImg.png";
import fitnesImg from "../assets/dropdownimages/fitnesImg.png";

const Dropdown = ({ refInside }) => {

  const colOne = [
    {
      isGroup: true,
      title: "Professional services",
    },
    {
      title: "Government & Administration",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: digitalBusinessesImg,
    },
    {
      title: "B2B sales",
      icon: salesImg,
    },
    {
      title: "HR & Recruitment",
      icon: hrImg,
    },
    {
      title: "Retail",
      icon: retailImg,
    },

    {
      isGroup: true,
      title: "BEAUTY AND HAIR",
    },
    {
      title: "Salons",
      icon: salonsImg,
    },
    {
      title: "Barbershop",
      icon: barberShopImg,
    },
  ];

  const colTwo = [
    {
      isGroup: true,
      title: "PERSONAL SERVICES",
    },
    {
      title: "Individual business owners",
      icon: individualImg,
    },
    {
      title: "Home Services",
      icon: homeServicesImg,
    },
    {
      title: "Cleaning services",
      icon: cleaningImg,
    },
    {
      title: "Automotive services",
      icon: servicesImg,
    },

    {
      isGroup: true,
      title: "EDUCATION AND COACHING",
    },
    {
      title: "Digital Businesses",
      icon: digitalBusinessesImg,
    },
    {
      title: "Education & Teaching",
      icon: educationImg,
    },
    {
      title: "Fitness & Sports",
      icon: fitnesImg,
    },
  ];

  const colThree = [
    {
      isGroup: true,
      title: "WHITELABEL SOLUTIONS",
    },
    {
      title: "For Agencies",
      icon: govermentImg,
    },
  ];

  return (
    <div className="dropdown" ref={refInside}>
      <div className="dropdown-left">
        <div className="dropdown-items">
          <div className="dropdown-col">
            {
              colOne.map((item) => {
                if (item.isGroup) {
                  return (<div className="group">{item.title}</div>)
                } else {
                  return (<div><img src={item.icon} alt="" />{item.title}</div>)
                }
              })
            }
          </div>
          <div className="dropdown-col">
            {
              colTwo.map((item) => {
                if (item.isGroup) {
                  return (<div className="group">{item.title}</div>)
                } else {
                  return (<div><img src={item.icon} alt="" />{item.title}</div>)
                }
              })
            }
          </div>
        </div>
        <div className="buttons">
          <div>
            <div><b>Can't find your industry?</b></div>
            <div>Book a demo to see if we're a match!</div>
          </div>
          <Button title="Book a demo" />
        </div>
      </div>

      <div className="dropdown-right">
        <div className="dropdown-col">
          {
            colThree.map((item) => {
              if (item.isGroup) {
                return (<div className="group">{item.title}</div>)
              } else {
                return (<div><img src={item.icon} alt="" />{item.title}</div>)
              }
            })
          }
        </div>
      </div>
    </div>
  );
};


export default Dropdown;