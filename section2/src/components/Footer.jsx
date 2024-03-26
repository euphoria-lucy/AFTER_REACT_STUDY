const Footer = () => {
  let name = "MISUNG";

  return (
    <>
      <h2 style={{ backgroundColor: "lavender", color: "black" }}>FOOTER</h2>
      <h4
        style={{
          backgroundColor: "lavenderblush",
          color: "black",
        }}
      >
        {name}
      </h4>
      <h5>{true}</h5> {/* 결과값 나오지 않음 */}
    </>
  );
};

export default Footer;
