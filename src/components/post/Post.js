import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
const Post = ({ post }) => {
  let imgUrl =
    "https://jbtrainingsolutions.com/wp-content/uploads/2020/01/Valley-Taurus-Mountains-Turkey.jpg";
  if (post.photo) {
    imgUrl = post.photo;
  }
  return (
    <div className="post">
      <img src={imgUrl} alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
