import React from 'react'
import Comment from './comment'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
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
     <TransitionGroup component={'ul'} class={'comment-item'}>
       {commentState.map((comment) =>
         (<CSSTransition
           key={comment.id}
           classNames={'note'}
           timeout={750}
         >
           <li >
             <Comment comment = {comment} />
           </li>
         </CSSTransition>))}
     </TransitionGroup>
    )}
  }

export default connect(state=> ({
    commentState:state.comment
}))(CommentList)