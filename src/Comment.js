import React from "react";

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment }) => (
  <li>
    {text} <span>votes: {votes}</span>{" "}
    <button className="thumbUp" onClick={() => thumbUpComment(id)}>
      <i className="far fa-thumbs-up" />
    </button>
    <button className="thumbDown" onClick={() => thumbDownComment(id)}>
      <i className="far fa-thumbs-down" />
    </button>
    <button onClick={() => removeComment(id)}>
      <i className="far fa-trash-alt" />
    </button>
  </li>
);

export default Comment;
