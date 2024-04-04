const Button = ({ text, color, children }) => {
  console.log();
  return (
    <>
      <button
        onClick={() => {
          console.log(text);
        }}
        onDoubleClick={() => {
          console.log(text);
        }}
        onMouseEnter={() => {
          console.log(text);
        }}
        style={{ color: color }}
      >
        {text}
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "CLOVER",
  color: "black",
};

export default Button;
