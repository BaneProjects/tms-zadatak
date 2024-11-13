const Dropdown = ({refInside}) => {
  return (
    <div className="dropdown" ref={refInside}>
      <div className="dropdown-left"></div>
      <div className="dropdown-right"></div>
    </div>
  );
};


export default Dropdown;