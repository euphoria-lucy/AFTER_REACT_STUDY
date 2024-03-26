const Main = () => {
  const num = 65;

  return (
    <div>
      <h3>MAIN</h3>
      {/* <h3>num = {num}</h3> */}
      <h3>
        {num} = {num % 2 === 0 ? "짝수" : "홀수"}
      </h3>
    </div>
  );
};

export default Main;
