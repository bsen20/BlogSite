import React from "react";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        src="https://jbtrainingsolutions.com/wp-content/uploads/2020/01/Valley-Taurus-Mountains-Turkey.jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        mollitia sed reprehenderit repellat totam architecto ipsum adipisci
        accusamus dolore, facilis delectus a earum corporis. Aliquam
        consequuntur eaque animi quis dicta.
      </p>
    </div>
  );
};

export default Post;
