import React, {Component} from 'react'
import Categorias from './components/Categorias';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <h1>Chuck Norris</h1>
        <Categorias />
      </div>
    );
  }
  
}


export default App;
