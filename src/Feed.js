import React, { useState, useEffect } from "react";
import db from "./firebase";

import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      <h2 className="feed__header">
        <h2>Home</h2>
      </h2>
      <TweetBox></TweetBox>
      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          ></Post>
        );
      })}
    </div>
  );
}

export default Feed;
