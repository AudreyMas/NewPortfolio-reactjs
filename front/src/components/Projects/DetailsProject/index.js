import React from "react"
import Menu from "../../Menu/index"
import Footer from "../../Footer/index"
import ProjectsList from "../../Projects/index"


class DetailsProject extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Detailsproject: [],
      // id: 89
    }
  }

  componentDidMount() {
    this.getProject();
  }

  getProject() {
    const project  = this.props.match.params.id

    fetch(`http://localhost:5000/projects/${project}`, {
    })
      .then(response => response.json())
      .then(res =>
        this.setState({
          Detailsproject: res.data
        })
      )
      .catch(err => console.error(err))
  }



  render() {
    const { Detailsproject } = this.state;
    let listDetails = Detailsproject.map((index, item) => (
      <li key={index}>
        <div className={"title"}>
          <h1>Detail du projet {item.name}</h1>
        </div>
        <div className={'description'}>{item.description}</div>
        <div className={'img'}>
          <img src={item.image_1} alt='imageProject' />
        </div>
      </li>
    ))

    return (
      <div className={"container"}>
        console.log
        <div className={"content detail-project"}>
          <div className={"bkg-dark"}></div>

          <Menu />
          <h1>Detail {this.props.id}</h1>
          <ul>
            {listDetails}
          </ul>

          <Footer />
        </div>
      </div>
    )
  }
}

export default DetailsProject

