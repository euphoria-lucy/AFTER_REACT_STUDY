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
  return (
    <>
      <h1>react start</h1>
      <Header />
      <Main />
      <Footer />
      <Button text={"CLOVER"} color={"lightgreen"} />
      <Button text={"LUCKY"} color={"lavender"} />
      <Button text={"LOVE"} color={"lavenderblush"} />
      <Button />
    </>
  );
}

export default App;
