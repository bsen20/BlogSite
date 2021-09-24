import React from "react";
import "./singlePost.css";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostContainer">
        <img
          src="https://jbtrainingsolutions.com/wp-content/uploads/2020/01/Valley-Taurus-Mountains-Turkey.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Bibek</b>
          </span>
          <span className="singlePostAuthor">1 hour ago </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ut
          quam dolor, et at beatae molestiae quisquam laboriosam iure nesciunt
          praesentium aliquam, distinctio earum autem quis blanditiis, numquam
          sequi expedita aspernatur reprehenderit! Consequuntur ea ipsa
          doloremque obcaecati distinctio qui expedita, tempora exercitationem
          quibusdam officia doloribus, eaque ad eveniet incidunt ipsum Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Magni animi
          similique consequuntur iure omnis fuga. Quaerat minima laboriosam
          reiciendis incidunt expedita odio quasi itaque unde molestias
          accusamus laborum magnam quo, asperiores ipsum soluta distinctio
          molestiae inventore nulla deleniti debitis. Assumenda, nostrum magni
          consectetur, eveniet enim odio velit placeat quis autem nisi dolor
          cum? Ullam quo voluptatibus iure maiores minus? Molestiae eveniet iure
          totam nulla, consectetur vero fuga modi accusamus quibusdam ipsum quis
          officiis provident error unde laboriosam delectus saepe nemo vitae
          dolor, itaque rerum eaque assumenda sapiente cum. Praesentium debitis
          temporibus minus at labore optio amet exercitationem facere, obcaecati
          nobis?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
