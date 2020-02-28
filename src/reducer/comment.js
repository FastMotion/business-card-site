import {normalizedComments as defaultComment} from '../content'

export default(commentStates=defaultComment,action)=>{
  const{type} = action
  switch (type){
    case  "DELETE_COMMENT" :return commentStates
  }
  return commentStates

}

