import { useState } from "react";

const Register = () => {
  // NAME
  const [name, setName] = useState("김정민");
  // BIRTH
  const [birth, setBirth] = useState("");
  // COUNTRY
  const [country, setCountry] = useState("");
  // PROFILE
  const [profile, setProfile] = useState("");

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    profile: "",
  });

  const onChangeName = (e) => {
    // setName(e.target.value);
    setInput({ ...input, name: e.target.value });
  };

  const onChangeBirth = (e) => {
    // setBirth(e.target.value);
    setInput({ ...input, birth: e.target.value });
  };

  const onChangeCountry = (e) => {
    // setCountry(e.target.value);
    setInput({ ...input, country: e.target.value });
  };

  const onChangeProfile = (e) => {
    // setProfile(e.target.value);
    setInput({ ...input, profile: e.target.value });
  };

  return (
    <>
      <div className="name">
        <input
          type="text"
          value={input.name}
          onChange={onChangeName}
          // placeholder="{input.name}"
        />
        <h3 style={{ color: "lightsteelblue" }}>NAME : {input.name}</h3>
      </div>

      <div className="birth">
        <input type="date" onChange={onChangeBirth} value={input.birth} />
        <h3 style={{ color: "lavender" }}>BIRTH : {input.birth}</h3>
      </div>

      <div className="country">
        <p>
          국적입력
          <select value={input.country} onChange={onChangeCountry}>
            <option value="KOREA">KOREA</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="JAPAN">JAPAN</option>
          </select>
        </p>
        <h3 style={{ color: "lightgray" }}>COUNTRY : {input.country}</h3>
      </div>

      <div className="profile">
        <p>자기소개서 작성</p>
        <textarea value={input.profile} onChange={onChangeProfile} />
        <h3>PROFILE : {input.profile}</h3>
      </div>
    </>
  );
};

export default Register;
