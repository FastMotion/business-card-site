import {normalizedComments} from '../content'
import {DELETE_COMMENT} from '../constans'

export default(commentStates = normalizedComments, action) => {
  const{ type, payload } = action

  switch (type){
    case  DELETE_COMMENT: return commentStates.filter(comment=>comment.id !== payload.id)
  }

  return commentStates
}

