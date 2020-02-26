import React,{Component}  from 'react'
import toggleOpen from '../decorators/toggleOpen'
import './styles.css'

 class Comment extends Component  {

    render() {
      console.log("1",this.props)
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
     const{commentUser,isOpen} = this.props
      if(!isOpen) return null
      if(!commentUser.text.length) return <p>No comment yet</p>
      return (
         <div>
         <h2>{commentUser.text}</h2>
         <h3>{commentUser.user}</h3>
        </div>
      )
   }
 }

export default toggleOpen(Comment)
