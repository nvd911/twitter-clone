import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";

import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "nvd911",
      username: "nvd",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1296521203071541249/DCnO1PCT_400x400.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="" className="tweetBox_form">
        <div className="tweetBox__input">
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button className="tweetBox__button" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
