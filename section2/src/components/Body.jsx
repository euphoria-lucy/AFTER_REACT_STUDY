import "./Body.css";

const Body = () => {
  const data = {
    goods: "clover",
    price: 7777777,
    isLogin: true,
  };

  if (data.isLogin) {
    return <div className="login">LOGIN</div>;
  } else {
    return <div className="logout">LOGOUT</div>;
  }
};

export default Body;
