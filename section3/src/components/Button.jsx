const Button = (props) => {
  console.log(props);
  return (
    <>
      <button style={{ color: props.color }}>{props.text}</button>
    </>
  );
};

Button.defaultProps = {
  text: "CLOVER",
  color: "black",
};

export default Button;
