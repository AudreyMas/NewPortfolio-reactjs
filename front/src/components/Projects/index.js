import React from 'react'
import ProjectList from './ProjectsList/index'
import { Link } from 'react-router-dom'
import Menu from '../Menu/index'
import Footer from '../Footer/index'


class Project extends React.Component {
  timeout = null;
  state = {
    isScrolling: false
  };

  render() {
    return (
      <div>
        <div className={"container "}>
          <div className={"content projects"}>

            <div className={"float-bull"}>
              <div className={"bull-3"}></div>
            </div>

            <div className={"bkg-dark"}></div>

            <Menu />

            <ProjectList />
          
            <Footer />

          </div>
        </div>
      </div>
    )
  }
}

export default Project