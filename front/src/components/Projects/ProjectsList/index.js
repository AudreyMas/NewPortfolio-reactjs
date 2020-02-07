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


      <li key={index}  >

        <div className={"title"} id={"title"}>
          <a href={"#popup1"}> <h1>{item.name}</h1></a>
        </div>
        <div className={'description'}>{item.description}</div>
        {/* <iframe className={"img-hover"} src={item.image_1} width="640" height="480"></iframe> */}
        <img className={"img-hover"} src={item.image_1} alt='imageProject' />

        <div id={"popup1"} className={"popup"}>
          <div className={"header-project"}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <ul>
              <li><h4>| Agency</h4>{item.agency}</li>
              <li><h4>| Position</h4>{item.position}</li>
              <li><h4>| Technology</h4>{item.technology}</li>
            </ul>
          </div>

          <div className={"popup-content"}>
            <a className={"close"} href={"#title"}>&times;</a>
            <div className={"list-images"}>
              <a href={item.image_1} alt='imageProject'>Site à visité</a>
              <img src={item.image_2} alt='imageProject' />
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
          {listProjects}
        </ul>
      </div>
    )
  }

}
export default ProjectList;