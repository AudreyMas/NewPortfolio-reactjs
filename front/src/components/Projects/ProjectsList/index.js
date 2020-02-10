import React, { Component } from 'react'
import { NavLink } from "react-router-dom"



class ProjectList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    this.getProjects();

  }

  getProjects() {
    fetch('http://localhost:5000/projects', {
    })
      .then(response => response.json())
      .then(res =>
        this.setState({
          projects: res.data
        })
      )
      .catch(err => console.error(err))
  }



  render() {
    const { projects } = this.state;
    let listProjects = projects.map((item, index) => (

      <li key={index}>

        <div className={"title"} id={"title"}>
          <a href={"#popup1"}> <h1>{item.name}</h1></a>
        </div>
        <p className={'description'}>{item.description}</p>
        <a href={"#popup1"} className={"img-hover"}><img src={item.image_2} alt='imageProject' /></a>


        <div id={"popup1"} className={"popup"}>
          <div className={"header-project"}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <ul>
              <li><h4>| Agency</h4><span>{item.agency}</span></li>
              <li><h4>| Position</h4><span>{item.position}</span></li>
              <li><h4>| Technology</h4><span>{item.technology}</span></li>
              <li><h4>| lien</h4><a href={item.image_1} target="_blank" alt='imageProject'>Site à visité</a></li>
            </ul>
          </div>

          <div className={"popup-content"}>
            <a className={"close"} href={"#title"} >&times;</a>
            <div className={"list-images"}>
              <img className={"img-width"} src={item.image_2} alt='imageProject' />
              <img src={item.image_3} alt='imageProject' />
              <img src={item.image_4} alt='imageProject' />
              <img src={item.image_5} alt='imageProject' />
              <img src={item.image_6} alt='imageProject' />
            </div>
          </div>
        </div>

      </li >
    ))

    return (

      <div className={"list-project"}>

        <ul className={"thelist"}>
          {/* <li className={"arrow"} id={"arrow"}>
            <div >
              fleche
              </div>
          </li> */}
          {listProjects}
        </ul>


      </div>
    )
  }

}
export default ProjectList;