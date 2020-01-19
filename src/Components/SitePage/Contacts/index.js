import React, {Component} from 'react'
import './styles.css'
import SocialNetworks from './SocialNetworks'
import telephone from './images/telephone.png'
class Contacts extends  Component {

    render() {

        return (
            <div className='contact-container'>
                <div className='container-text'>
                     <h1 className='contact-header'>Контактная информация</h1>
                        <p className='contact-text'>Если у вас есть какие-то вопросы, пожалуйста, не стесняйтесь и напишите мне.</p>
                        <p className='contact-text'>Если вы не получили немедленный ответ, это значит, что я путешествую где-то у черта на куличках.</p>
                        <p className='contact-text'>Я отвечу, как только смогу. </p>
                        <p className='contact-text'>  Обещаю!</p>
                        <section className='contact-phone'>
                          <img className='icon-telephone' src={telephone}/>
                            <p className='contact-telephone'>+380957182002</p>
                        </section>
                </div>
              <SocialNetworks />
            </div>

        )
    }
}



export default Contacts