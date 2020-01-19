import React from 'react'
import image2 from './images/image2.png'
import image3 from './images/telegram.png'
import image4 from './images/facebook.png'
import image5 from './images/gmail.png'
import './styles.css'


class SocialNetworks extends React.Component {
  render() {
    return (
      <div className='item-container'>
           <a className='items-body' href='https://www.instagram.com/evgeniy_gyliy'>
              <img className='items-icon' src={image2} />
             <section className='item-text'>follow me</section>
           </a>
        <a className='items-body' href='https://web.telegram.org/#/im?p=@evgeniy_stuntman'>
          <img className='items-icon' src={image3} />
          <section className='item-text'>write me</section>
        </a>
        <a className='items-body' href='https://www.facebook.com/evgeniygyliy?fref=hovercard'>
          <img className='items-icon' src={image4} />
          <section className='item-text'>follow me</section>
        </a>
        <div className='items-body'>
          <img className='items-icon' src={image5} />
            <section className='item-text'>evgeniy.stuntman@gmail.com</section>
        </div>
      </div>
    )
  }
}

export default SocialNetworks