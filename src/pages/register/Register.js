import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
      // console.log(res);
    } catch (error) {
      console.log("Username or email already used", error);
      setError(true);
      alert("Someting Went Wrong ");
      window.location.reload();
    }
    // setUsername("");
    // setEmail("");
    // setPassword("");
  };

  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => {
            // console.log(e.target.value);
            setUsername(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
        <button className="registerLoginButton registerButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
