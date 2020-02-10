import React from 'react'
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as doneData from "../Loading/doneloading.json";
import { Link } from 'react-router-dom';
import Menu from '../Menu/index'
import Footer from '../Footer/index'

const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 1200);
  }


  copyMail = (e) => {
    this.mail.select();
    document.execCommand('copy');
    if (document == null) {
      alert('not copied')
    } else {
      alert('MAIL COPIED : masambaaudrey1@gmail.com')
    }
  };

  render() {
    return (

      <div>
        {!this.state.done ? (
          <FadeIn>
            <div className={"start-loading"}>
              <h1>WELCOME to my portfolio</h1>
              {!this.state.loading ? (
                null
              ) : (
                  <div className={"end-loading"}>
                    <Lottie options={defaultOptions2} />
                  </div>
                )}
            </div>
          </FadeIn>
        ) : (

            <div className={'container home'}>

              <div className={"content"}>
                <div className={"float-bull"}>
                  <div className={"bull-1"}></div>
                  <div className={"bull-2"}></div>
                  <div className={"bull-3"}></div>
                </div>

                <div className={"bkg-dark"}></div>

                <div className={"title-links"}>
                  <Menu />

                  <span class='title'>
                    <h1><span className={"black-word"}>AU</span><span className={"space-name"}>DREY</span><br /> <span className={"black-word"}>MA</span>SAMBA</h1>
                    <h2>DESIGN/FRONTED JUNIOR</h2>
                  </span>
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

                <Footer />

              </div>
            </div>

          )}
      </div>

    )
  }
}

export default Home;