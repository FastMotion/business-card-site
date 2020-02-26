import React from 'react'
import Comment from './comment'
import './styles.css'

class CommentList extends React.Component {

  render () {
     return (
      <div className='comment-container'>
        <div> {this.getBody()}</div>
       </div>
     )
    }
  getBody() {
    const{comments} = this.props
   return(
     <ul>
       {comments.map((commentUser) => <li key={commentUser.id}><Comment commentUser = {commentUser} /></li>)}
     </ul>
    )}
  }

export default CommentList