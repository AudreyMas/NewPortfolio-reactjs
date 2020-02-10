import React from 'react'
import Footer from '../Footer/index'
import { Link } from 'react-router-dom'
import Menu from '../Menu/index'


class Contact extends React.Component {

  render() {
    return (
      <div className={'container '}>
        <div className={"content about-contact"}>
          <div className={"float-bull"}>
            <div className={"bull-3"}></div>
          </div>
          <div className={"bkg-dark"}></div>

          <Menu />

          {/* <div className={'contact'}> */}
          <div className={'about'}>
            <h2>About me</h2>
            <p>
            I'm Audrey a Front-end/Design developer with a
strong interest of design and web technologies.
<br/>
After graduating with distinction from a Bachelor in
Multimedia Writing, I started working as a
Consultant for Beobank in 2017 until 2018.
I worked on multiple projects in front-end
development, both during and after my education.
Examples are an online CV generator and an
internship at Chatbot Plus,...
<br/>
After gaining some experience as a Test Engineer,
I returned to my first love, web development.
Then continuing my education by deep diving into
web programming, focusing on REACT js web apps.
<br/>
I want to participate in challenging projects
where I can broaden my knowledge and
creativity, show my skills and learn from my 
colleagues.
            </p>
          </div>
          <ul className={"links"}>
            <li><a href="https://www.linkedin.com/in/audreymasamba/" target="_blank">LINKEDIN</a></li>
            <li><a href="https://github.com/AudreyMas?tab=repositories" target="_blank">GITHUB</a></li>
            <li>
              <input ref={(mail) => this.mail = mail} type="text" value="masambaaudrey1@gmail.com" id="myInput" />
              <a onClick={this.copyMail}>MAIL</a>
            </li>
            <li><a href="../assets/img/cv-Masamba_Audrey.pdf" target="_blank">CV</a></li>
          </ul>
          {/* </div> */}
          <Footer />
        </div>
      </div >
    )
  }
}

export default Contact 