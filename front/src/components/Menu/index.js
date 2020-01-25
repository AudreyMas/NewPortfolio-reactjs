import React from 'react'
import {Link} from 'react-router-dom';


class Menu extends React.Component {

  render() {
    return (
      <div>
        <ul className={"menu-btns"}>
          <li><Link to="/"><span className={"btn-menu"} >Home</span></Link></li>
          <li><Link to="/projects"><span className={"btn-menu"} >Projects</span></Link></li>
          <li><Link to="/contact"><span className={"btn-menu"} >About/Contact</span></Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu