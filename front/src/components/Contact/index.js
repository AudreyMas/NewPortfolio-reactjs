import React from 'react'
import Footer from '../Footer/index'
import {Link} from 'react-router-dom'
import Menu from '../Menu/index'


class Contact extends React.Component {

  render() {
    return (
      <div className={'container '}>
        <div className={"content about-contact"}>
        <div className={"bkg-dark"}></div>
 
          <Menu/>
          <div className={'about'}>
            <h2>ABOUT</h2>
          </div>
          <div className={'contact'}>
            <h2>CONTACT</h2>
          </div>
          <Footer/>
        </div>
      </div >
    )
  }
}

export default Contact 