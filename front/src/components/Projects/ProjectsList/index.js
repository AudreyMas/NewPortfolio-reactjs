import React, { Component } from 'react'
import { NavLink } from "react-router-dom"



class ProjectList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      isShow: false
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

  showHidePopup() {
    let isShow = this.state.isShow;
    this.setState({ isShow: !isShow });
  }



  render() {
    const { projects } = this.state;

    let listProjects = projects.map((item, index) => (
      // <li key={index} onClick={this.showHidePopup.bind(this)} >
      //   {/* <NavLink to={`/projects/${item.id}`}>
      //     <div className={"title"}>
      //       <h1>{item.name}</h1>
      //     </div>
      //     <div className={'description'}>{item.description}</div>
      //     <img src={item.image_1} alt='imageProject' />
      //   </NavLink> */}

      //   {this.state.isShow ?
      //     <div className={"popup"}>
      //       <button type="button" value="X">X</button>
      //       <iframe src={item.image_1} width="640" height="480"></iframe>
      //     </div>

      //     : <div className={"list-titles"}>
      //       <div className={"title"}>
      //         <h1>{item.name}</h1>
      //       </div>
      //       <div className={'description'}>{item.description}</div>
      //     </div>
      //   }

      //   {/* {this.state.isShow ?
      //     <iframe src={item.image_1} width="640" height="480"></iframe>
      //     : null} */}

      // </li>

      <li key={index} onClick={this.showHidePopup.bind(this)} >
        {/* <NavLink to={`/projects/${item.id}`}>
        <div className={"title"}>
          <h1>{item.name}</h1>
        </div>
        <div className={'description'}>{item.description}</div>
        <img src={item.image_1} alt='imageProject' />
      </NavLink> */}

        {/* {this.state.isShow ?
          <div className={"popup"}>
            <button type="button" value="X">X</button>
            <iframe src={item.image_1} width="640" height="480"></iframe>
          </div>
          : <div className={"list-titles"}>
            <div className={"title"}>
              <h1>{item.name}</h1>
            </div>
            <div className={'description'}>{item.description}</div>
          </div>
        } */}


        <div className={"title"} id={"title"}>
          <a href={"#popup1"}> <h1>{item.name}</h1></a>
        </div>
        <div className={'description'}>{item.description}</div>
        {/* <iframe className={"img-hover"} src={item.image_1} width="640" height="480"></iframe> */}
        <img className={"img-hover"} src={item.image_1} alt='imageProject' />

        <div id={"popup1"} className={"overlay"}>
          <div className={"popup"}>
          <a className={"close"} href={"#title"}>&times;</a>

            <h2>{item.name}</h2>
            <img src={item.image_1} alt='imageProject' />
          </div>
        </div>





      </li >
    ))

    return (

      <div>

        <ul>
          {listProjects}
        </ul>
      </div>
    )
  }

}
export default ProjectList;