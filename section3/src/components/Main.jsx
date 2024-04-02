import "./Main.css";

const Main = () => {
  const age = 7;
  const user = {
    name: "kim jeongmin",
    isLogin: false,
  };

  if (user.isLogin) {
    return <div className="login">로그인</div>;
  } else {
    return <div>로그아웃</div>;
  }
};

export default Main;
