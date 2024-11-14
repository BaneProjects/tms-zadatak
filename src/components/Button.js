const Button = (props) => {
  return (
    <div className={"btn" + (props.gold ? " btn--gold" : "") + (props.blue ? " btn--blue" : "")}>
      {props.title}
    </div>
  );
}

export default Button;