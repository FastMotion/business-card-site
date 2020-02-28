import React,{Component}  from 'react'
import toggleOpen from '../decorators/toggleOpen'
import './styles.css'
import {connect} from 'react-redux'

 class Comment extends Component  {

    render() {
      const {isOpen,toggleOpen}=this.props
      const text = isOpen ? 'close' : 'open'

      return (
        <div className='commentWrapper'>
              <button onClick={toggleOpen} className='btn-comment'>
                {text}
                </button>
            {this.getBody()}
        </div>
      )
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

export default  (toggleOpen(Comment))
