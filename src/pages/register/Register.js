import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter your Username" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="registerButton">Register</button>
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
