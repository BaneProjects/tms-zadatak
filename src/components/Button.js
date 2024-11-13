const Button = (props) => {
  return (
    <div className={"btn" + (props.gold ? " btn--gold" : "")}>
      {props.title}
    </div>
  );
}

export default Button;