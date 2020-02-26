import React,{Component}  from 'react'
import toggleOpen from '../decorators/toggleOpen'
import './styles.css'

 class Comment extends Component  {

    render() {
      const {isOpen,toggleOpen}=this.props
      return (
        <div className='commentWrapper'>
              <button onClick={toggleOpen} className='btn-comment'>
                {isOpen ? 'close' : 'open'}
                </button>
            {this.getBody()}
        </div>
      )
    }

   getBody() {
     const{commentUser,isOpen} = this.props
      if(!isOpen) return null
      return (
         <div>
         <h2>{commentUser.text}</h2>
         <h3>{commentUser.user}</h3>
        </div>
      )
   }
 }

export default toggleOpen(Comment)
