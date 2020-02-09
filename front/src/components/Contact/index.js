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
            <p>Je suis Audrey Masamba et diplômée d'un bachelier en Écriture Multimédia de l'<a
              href="http://isfsc.be/ecriture-multimedia/" target="_blank">ISFSC</a> et certifiée Front-end
                    (React js) de la <a href="https://www.wildcodeschool.com/fr-BE"
                target="_blank">Wilde Code School</a>.
              <br />J'ai acquis une expérience d’1 an dans le domaine du webdesign et plusieurs mois en tant que
              Front-end (react js).
              <br />J'ai pu participer et réaliser de manière autonome et/ou collaborative à plusieurs projets
              online ou offline au sein d'entreprises et starts-up (RTL BELGIUM, Média Animation asbl, One4You,
              Chatbot Plus) ou projets personnels.
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