import React, { Component } from 'react';
import PostItem from './PostItem';
import Nav from './Nav';
import './App.css';

class App extends Component {
  state={
    arr: [99,2,3],
    posts: [],
    isNavVisable: false
  }

  componentDidMount = () => {
    fetch('http://reacttestbackend.local/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then( response =>
        this.setState({
          posts: response
        })
      )
      .catch(err => console.log(err))
    }

  render() {
    return (
      <div className="App">
          <Nav myPro="dddddd" />
        
        
      </div>
    );
  }
}

export default App;
