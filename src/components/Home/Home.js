import React, { useState } from "react";

const list = ["todo 1", "todo 2", "todo 3"];

let a = 4 + 5;

const Home = () => {
  const [number, setNumber] = useState(0);
  const [submitted, setSubmited] = useState(false);

  const changeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    console.log("handle submit");
    event.preventDefault();
    setSubmited(true);
  };

  return (
    <div>
      Home
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={number} onChange={changeNumber} />
        <input type="submit" value="Submit" />
        {submitted && <p>{number}</p>}
      </form>
    </div>
  );
};

export default Home;
