import React from 'react'
import Footer from '../Footer/index'
import { Link } from 'react-router-dom'
import Menu from '../Menu/index'


class Contact extends React.Component {

  render() {
    return (
      <div className={'container '}>
        <div className={"content about-contact"}>
          <div className={"bkg-dark"}></div>

          <Menu />
          <div className={'about'}>
            <h2>ABOUT</h2>
          </div>
          <div className={'contact'}>
            <h2>CONTACT</h2>
            <ul className={"links"}>
              <li><a href="https://www.linkedin.com/in/audreymasamba/" target="_blank">LINKEDIN</a></li>
              <li><a href="https://github.com/AudreyMas?tab=repositories" target="_blank">GITHUB</a></li>
              <li>
                <input ref={(mail) => this.mail = mail} type="text" value="masambaaudrey1@gmail.com" id="myInput" />
                <a onClick={this.copyMail}>MAIL</a>
              </li>
              <li><a href="../assets/img/cv-Masamba_Audrey.pdf" target="_blank">CV</a></li>
            </ul>
          </div>
          <Footer />
        </div>
      </div >
    )
  }
}

export default Contact 