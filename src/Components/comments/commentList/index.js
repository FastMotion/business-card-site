import React from 'react'
import Comment from './comment'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './styles.css'
import { connect } from 'react-redux'

class CommentList extends React.Component {
  static defaultProps = {
    comments: []
  }
  // state = {
  //   comments: []
  // }

  // async componentDidMount() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  //
  //     const data = await response.json()
  //     this.setState({comments: data})
  // }

  render() {
    return (
      <div className='comment-container'>
        {this.body()}
        {/*{this.state.comments.map(comment => <div>{comment.name}</div>)}*/}
      </div>
    )
  }
  body() {
    const {commentState} = this.props
   return(
     <TransitionGroup component={'ul'}>
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


  // export default CommentList