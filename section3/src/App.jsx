import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Button from "./components/Button";

const Header = () => {
  return (
    <header>
      <h2
        style={{
          color: "gray",
          borderBottom: "2px solid lavender",
          backgroundColor: "lavenderblush",
        }}
      >
        header
      </h2>
    </header>
  );
};

function App() {
  const buttonProps = { text: "news", color: "lightsteelblue", a: 1, b: 2 };

  return (
    <>
      <Button {...buttonProps} />
      <h1>react start</h1>
      <Header />
      <Main />
      <Footer />
      <Button text={"CLOVER"} color={"lightgreen"}>
        <div>자식</div>
      </Button>
      <Button text={"LUCKY"} color={"lavender"} />
      <Button text={"LOVE"} color={"lavenderblush"} />
      <Button />
      <Button text={"shopping"} color={"orange"} a={1} b={2} />
    </>
  );
}

export default App;
