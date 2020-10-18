import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon"></SearchIcon>
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgetContainer">
        <h2>What happening</h2>
        <TwitterTweetEmbed tweetId={"933354946111705097"}></TwitterTweetEmbed>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 200 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/saurabhnemade"}
          options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
