import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";
const SinglePost = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const post = await axios.get(`/posts/${postId}`);
      console.log(post);
      setPost(post.data);
    };
    getPost();
  }, [postId]);

  // console.log(post);
  let imgUrl =
    "https://jbtrainingsolutions.com/wp-content/uploads/2020/01/Valley-Taurus-Mountains-Turkey.jpg";
  if (post.photo) {
    imgUrl = post.photo;
  }

  return (
    <div className="singlePost">
      <div className="singlePostContainer">
        <img src={imgUrl} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :{" "}
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostAuthor">
            {new Date(post.createdAt).toDateString()}{" "}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
