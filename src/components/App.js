import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogIndex from "../containers/HogIndex";
import Filters from "../components/Filters";

class App extends Component {

  state = {
    greasy: false,
    byWeight: false,
    banishedHogs: []
  }

  toggleGreasy = () => this.setState({greasy: !this.state.greasy})

  toggleByWeight = () => this.setState({byWeight: !this.state.byWeight})

  filteredHogs = () => {
    let newHogs = hogs.filter(hog => !this.state.banishedHogs.includes(hog.name))
    if (this.state.greasy){
      return newHogs.filter(hog => hog.greased)
    } else {
      return newHogs
    }
  }

  sortedHogs = () => {
    if (this.state.byWeight){
      return [...this.filteredHogs()].sort((hogA, hogB) => hogB.weight - hogA.weight)
    } else {
      return [...this.filteredHogs()].sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
    }
  }

  banish = (name) => this.setState({banishedHogs: [...this.state.banishedHogs, name]})

  unbanishAllHogs = () => this.setState({banishedHogs: []})

  render() {
    return (
      <div className="App">
        <Nav />
        <Filters unbanishAllHogs={this.unbanishAllHogs} greasy={this.state.greasy} toggleGreasy={this.toggleGreasy} byWeight={this.state.byWeight} toggleByWeight={this.toggleByWeight} />
        <br/>
        <br/>
        <HogIndex hogs={this.sortedHogs()} banish={this.banish} />
      </div>
    );
  }
}

export default App;
