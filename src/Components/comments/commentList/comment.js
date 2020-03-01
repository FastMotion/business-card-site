import React,{Component}  from 'react'
import toggleOpen from '../decorators/toggleOpen'
import {CSSTransition,TransitionGroup} from  'react-transition-group'
import './styles.css'
import {deleteComment} from '../../AC'
import {connect} from 'react-redux'

 class Comment extends Component  {
    render() {
      const { isOpen, toggleOpen, comment } = this.props
      const text = isOpen ? 'close' : 'open'

      return (
        <div className='commentWrapper'>
          <button onClick={toggleOpen} className='btn'>
            <CSSTransition
              classNames={'btn-text'}
              in={isOpen}
              timeout={150}
                >
                  <div>{text}</div>
                </CSSTransition>
              </button>
          <button onClick={this.handleDelete} className={'btn'} >delete me</button>
          <CSSTransition
            in={isOpen}
            classNames={'item'}
            timeout={700}>
            <section >
            {this.getBody()}
          </section >
            </CSSTransition>
        </div>
      )
    }
    handleDelete = () => {
      const { comment, deleteComment } = this.props
      deleteComment( comment.id )
      console.log('3', 'delete')
    }
   getBody() {
     console.log('2',this.props)
     const{ isOpen, comment} = this.props
      if( !isOpen ) return null
      if( !comment.text.length ) return <p>No comment yet</p>
      return (
         <div >
         <h2>{ comment.text }</h2>
         <h3>{ comment.user }</h3>
        </div>
      )
   }
 }

export default connect( null, { deleteComment })(toggleOpen(Comment))
