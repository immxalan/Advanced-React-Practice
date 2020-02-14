import React, { Component }  from 'react';
import axios from "axios";
import './App.css';
import PlayerCard from "./components/PlayerCard";
import Nav from "./components/Nav";
//CCR - Class/Constructor componentDidMount Render
class App extends Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }
  object = {}
  componentDidMount(){
    axios.get(`http://localhost:5000/api/footballers`)
    .then(response => {
      console.log(response.data);
      console.table(response.data);
      this.setState({players: response.data})
      console.log(Array.isArray(this.state.players))

    })
  }
  this
    render(){
    return (
    <div className="App">
      <Nav/>
      <h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>
      <div className="container">
      {this.state.players.map(player => (
        <PlayerCard 
        key={player.id}
        player={player}/>
      ))}
      </div>
    </div>
    );
  }
}
export default App;
