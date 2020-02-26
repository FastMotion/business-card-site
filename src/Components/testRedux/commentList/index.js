import React from 'react'
import Comment from './comment'
import './styles.css'

class CommentList extends React.Component {
  static defaultProps={
    comments:[]
  }

  render () {
     return (
      <div className='comment-container'>
        <div> {this.Body()}</div>
       </div>
     )
    }
  Body() {
    const{comments} = this.props
   return(
     <ul>
       {comments.map((commentUser) => <li key={commentUser.id}><Comment commentUser = {commentUser} /></li>)}
     </ul>
    )}
  }

export default CommentList