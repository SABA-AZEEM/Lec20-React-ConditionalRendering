import React from "react";
import Input from "./Input";

let isLoggedIn = false;

function Form() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return (
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Form;
