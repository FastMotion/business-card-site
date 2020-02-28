import React,{Component}  from 'react'
import toggleOpen from '../decorators/toggleOpen'
import './styles.css'
import {deleteComment} from '../../AC'
import {connect} from 'react-redux'

 class Comment extends Component  {

    render() {
      const {isOpen,toggleOpen}=this.props
      const text = isOpen ? 'close' : 'open'
      return (
        <div className='commentWrapper'>
              <button onClick={toggleOpen} className='btn-comment'>
                <div className={'btn-text'}>{text}</div>
                </button>
            {this.getBody()}
            <button onClick={this.handleDelete} className={'btn-comment'} >delete me</button>
        </div>
      )
    }

    handleDelete=()=> {
      const {comment,deleteComment} = this.props
      deleteComment(comment.id)
      console.log('3','delete')
    }

   getBody() {
     console.log('2',this.props)
     const{isOpen,comment} = this.props
      if(!isOpen) return null
      if(!comment.text.length) return <p>No comment yet</p>
      return (
         <div>
         <h2>{comment.text}</h2>
         <h3>{comment.user}</h3>
        </div>
      )
   }
 }

export default connect(null,{ deleteComment} ) (toggleOpen(Comment))
