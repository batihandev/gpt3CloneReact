import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/apia")
      .then((res) => res.json())
      .then((data) => setData(data.data[1].category));
  }, []);
  const [email, setEmail] = React.useState(null);
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const sendEmail = () => {
    console.log(email);
    fetch(`http://localhost:3001/mail/${email}`);
  };
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{!data ? "Loading..." : data}</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input
            id="emailget"
            type="email"
            placeholder="Your Email Adress"
            onChange={getEmail}
            value={email}
          />
          <button id="email-send-button" type="submit" onClick={sendEmail}>
            Get Started
          </button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
