import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get("/categories");
      console.log(res.data);
      setCat(res.data);
    };
    getCategory();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/originals/e5/ed/80/e5ed80c10d1fb9aae22c8dfda9b094c2.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, autem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quae?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
          {/* <li className="sidebarListItem">{"jhbvjh"}</li> */}
          {/* <li className="sidebarListItem">{"jhbvjh"}</li> */}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
