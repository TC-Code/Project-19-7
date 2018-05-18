import React from "react";

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment }) => (
  <li>
    {text} <span>votes: {votes}</span>{" "}
    <button className="thumbUp" onClick={() => thumbUpComment(id)}>
      <i className="far fa-thumbs-up" />
    </button>
    <button className="thumbDown" onClick={() => thumbDownComment(id)}>
      <i className="far fa-thumbs-down" />
    </button>
  </li>
);

export default Comment;
