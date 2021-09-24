import React from "react";
import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";
const Setting = () => {
  return (
    <div className="setting">
      <div className="settingContainer">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://jbtrainingsolutions.com/wp-content/uploads/2020/01/Valley-Taurus-Mountains-Turkey.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Bibek" />
          <label>Email</label>
          <input type="email" placeholder="Bibek@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
