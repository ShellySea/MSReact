import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  const { name, location, contact, type } = props;

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
      <h4>Type: {type}</h4>
      <h4>Count: {count}</h4>
      <span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </span>
      <h4>Count2: {count2}</h4>
    </div>
  );
};

export default User;
