function Button(props) {
  return (
    <div className={"btn" + (props.gold ? " btn--gold" : "")}>
      btn
    </div>
  );
}

export default Button;