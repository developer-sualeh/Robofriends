import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';

class App extends Component {

constructor(){

    super()
    this.state = {
        robots : [],
        searchField : '',

    }

}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(user => this.setState({robots: user}));
}

onSearchChange = (event) =>{
    
    this.setState({ searchField: event.target.value })
   
    
}

render(){
    const { robots, searchField} = this.state;
    const FilterRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (!robots.length) ?
       
          <h1>Loading...</h1>
        :    
    
        (
            <div className="tc">
                <h3>RoboFriends</h3>
               <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                <CardList robots={FilterRobots} />
                </Scroll>
               
            </div>
            
    
        );
        
    
   

}
    


}

export default App;