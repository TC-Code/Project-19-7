import { ADD_COMMENT } from "./actions";
import { THUMB_UP_COMMENT } from "./actions";

function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        {
          id: action.id,
          text: action.text,
          votes: 0
        },
        ...state
      ];

    case THUMB_UP_COMMENT:
      return state.map(comment => {
        comment.id === action.id
          ? { ...comment, votes: comment.votes + 1 }
          : comment;
      });

    default:
      return state;
  }
}
export default comments;
