import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  // cần data gì thì sd props
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar className="post_avatar" alt="Travis Howard" src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span>
                {verified && (
                  <VerifiedUserIcon className="post__badge"></VerifiedUserIcon>
                )}
              </span>
              <span className="post__headerSpecial">{username}</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img className="post_image" src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon font-Size="small"></ChatBubbleOutlineIcon>
            <RepeatIcon font-Size="small"></RepeatIcon>
            <FavoriteBorderIcon font-Size="small"></FavoriteBorderIcon>
            <PublishIcon font-Size="small"></PublishIcon>
          </div>
          <div className="post__end">
            <Avatar className="post_avatar" alt="Travis Howard" src={avatar} />
            <p>Display this line string</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
