import React, { Component } from 'react'
import HogFront from '../components/HogFront'
import HogBack from '../components/HogBack'


export default class HogCard extends Component {

  state = {
    clicked: false
  }

  toggleClicked = () => this.setState({clicked: !this.state.clicked})

  render(){
    return <div className="ui eight wide column" onClick={this.toggleClicked}>
      {this.state.clicked ? <HogBack {...this.props} /> : <HogFront {...this.props}/>}
    </div>
  }

}
