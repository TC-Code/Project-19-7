import uuid from "uuid";

const ADD_COMMENT = "ADD_COMMENT";
const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";
const THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

export { ADD_COMMENT };
export { addComment };
export { THUMB_UP_COMMENT };
export { thumbUpComment };
export { THUMB_DOWN_COMMENT };
export { thumbDownComment };
export { REMOVE_COMMENT };
export { removeComment };
