import React from 'react'
import Comment from './comment'
import './styles.css'
import {connect} from 'react-redux'

class CommentList extends React.Component {
  static defaultProps={
    comments:[]
  }

  render () {

     return (
      <div className='comment-container'>
         {this.Body()}
       </div>
     )
    }

  Body() {
    const {commentState} = this.props

   return(
     <ul>
       {commentState.map((comment) => <li key={comment.id}><Comment comment = {comment} /></li>)}
     </ul>
    )}
  }

export default connect(state=> ({
    commentState:state.comment
}))(CommentList)