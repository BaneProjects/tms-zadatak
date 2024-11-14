import Button from "./Button";
import govermentImg from "../assets/dropdownimages/govermentImg.png"
  ;
const Dropdown = ({ refInside }) => {

  const colOne = [
    {
      isGroup: true,
      title: "Professional services",
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },

    {
      isGroup: true,
      title: "Professional services",
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
  ];

  const colTwo = [
    {
      isGroup: true,
      title: "Professional services",
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },

    {
      isGroup: true,
      title: "Professional services",
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
    {
      title: "Digital businesses",
      icon: govermentImg,
    },
  ];

  const colThree = [
    {
      isGroup: true,
      title: "Professional services",
    },
    {
      title: "Digital businesses",
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