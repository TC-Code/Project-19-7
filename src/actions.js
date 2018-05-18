import uuid from "uuid";

const ADD_COMMENT = "ADD_COMMENT";
const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
}

function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  };
}

export { ADD_COMMENT };
export { addComment };
export { THUMB_UP_COMMENT };
export { thumbUpComment };
