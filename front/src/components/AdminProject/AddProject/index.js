import React, { Component } from 'react';

class AddProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // projects: [],
      name: '',
      description: '',
      agency: '',
      position: '',
      technology: '',
      image_1: '',
      image_2: '',
      image_3: '',
      image_4: '',
      image_5: '',
      image_6: '',


    }
  }

  addProject = (event) => {
    event.preventDefault();

    // const { project } = this.state
    const config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state),
    };
    fetch(`http://localhost:5000/projects/add?name=${this.state.name}&description=${this.state.description}&agency=${this.state.agency}&position=${this.state.position}&technology=${this.state.technology}&image_1=${this.state.image_1}&image_2=${this.state.image_2}&image_3=${this.state.image_3}&image_4=${this.state.image_4}&image_5=${this.state.image_5}&image_6=${this.state.image_6}`, config)
      .then(response => response.JSON.stringify())
      // .then(response => {
      //   if (response.status == 200) {
      //     // return alert('project is added !! ')
      //     this.props.history.push('/');
      //   } else {
      //     alert('problem with the add');
      //   }
      // })

      .catch(function (error) {
        console.log(error);
      });
    console.log('added  ' + 'name: ' + this.state.name + '  description: ' + this.state.description + '  image: ' + this.state.image_1)
  }


  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  updateDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }
  updateAgency = (event) => {
    this.setState({
      agency: event.target.value
    })
  }
  updatePosition = (event) => {
    this.setState({
      position: event.target.value
    })
  }
  updateTechnology = (event) => {
    this.setState({
      technology: event.target.value
    })
  }
  updateImage1 = (event) => {
    this.setState({
      image_1: event.target.value
    })
  }
  updateImage2 = (event) => {
    this.setState({
      image_2: event.target.value
    })
  }
  updateImage3 = (event) => {
    this.setState({
      image_3: event.target.value
    })
  }
  updateImage4 = (event) => {
    this.setState({
      image_4: event.target.value
    })
  }
  updateImage5 = (event) => {
    this.setState({
      image_5: event.target.value
    })
  }
  updateImage6 = (event) => {
    this.setState({
      image_6: event.target.value
    })
  }


  // handelSubmit = (event) => {
  //   let MYJSON = JSON.stringify(this.state, 1, 2, 3);
  //   return alert('Look your console' + console.log({ MYJSON }))

  // }


  render() {

    return (
      <div className={'project-add'}>
        {console.log('image:' + this.state.image_1)}
        {console.log('name:' + this.state.name)}
        {console.log('description:' + this.state.description)}
        <h2>Add project</h2>
        <div className={'project-add-infos'}>
          <input
            value={this.state.name}
            placeholder="name"
            onChange={this.updateName.bind(this)} />
          <textarea className={'description'}
            value={this.state.description}
            placeholder="description"
            onChange={this.updateDescription.bind(this)} />
          <input
            value={this.state.agency}
            placeholder="agency"
            onChange={this.updateAgency.bind(this)} />
          <input
            value={this.state.position}
            placeholder="position"
            onChange={this.updatePosition.bind(this)} />
          <input
            value={this.state.technology}
            placeholder="technology(ies)"
            onChange={this.updateTechnology.bind(this)} />
        </div>

        <div className={'project-add-img'}>
          <input
            value={this.state.image_1}
            placeholder="picture1"
            onChange={this.updateImage1.bind(this)} />
          <input
            value={this.state.image_2}
            placeholder="picture2"
            onChange={this.updateImage2.bind(this)} />
          <input
            value={this.state.image_3}
            placeholder="picture3"
            onChange={this.updateImage3.bind(this)} />
          <input
            value={this.state.image_4}
            placeholder="picture4"
            onChange={this.updateImage4.bind(this)} />
          <input
            value={this.state.image_5}
            placeholder="picture5"
            onChange={this.updateImage5.bind(this)} />
          <input
            value={this.state.image_6}
            placeholder="picture6"
            onChange={this.updateImage6.bind(this)} />
        </div>
        <button type="submit" onClick={this.addProject}>SENT</button>
        {/* <button onClick={this.handelSubmit}>envoyer console</button> */}
      </div>
    )
  }
}
export default AddProject;