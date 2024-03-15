import React, { useState } from "react";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const changeVal = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-3">
          <label for="name" className="form-label">
            UserName
          </label>
          <input
            onChange={(e) => {
              changeVal(e);
            }}
            value={user.name}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => {
              changeVal(e);
            }}
            value={user.email}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            value={user.password}
            onChange={(e) => {
              changeVal(e);
            }}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
