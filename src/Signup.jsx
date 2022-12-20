import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
        setStatus(error.response.status);
      });
  };

  return (
    <div id="signup" className="text-center">
      <h1 className="text-center">Signup</h1>
      {status ? (
        <img src={`https://httpstatusdogs.com/img/${status}.jpg`} alt="" />
      ) : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="text-center">
          Name:{" "}
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            type="text"
          />
        </div>

        <div className="text-center">
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password:
          <input
            className="text-center"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </div>
        <div>
          Password confirmation:
          <input
            className="text-center"
            value={password_confirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            name="password_confirmation"
            type="password"
          />
        </div>
        {password_confirmation !== password ? (
          <small className="text-danger ">PASSWORD DOESN'T MATCH, BOZO</small>
        ) : null}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
