import React, { Component } from "react";
import axios from "axios";

class Categorias extends Component {
  state = {
    category: [],
  };

  componentDidMount() {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => {
        console.log(res);
        this.setState({ category: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="jumbotron">
        <h2>Selecciona una categoría</h2>
        <select>
          {this.state.category.map((elemento) => (
            <option key={elemento} value={elemento}>
              {elemento}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Categorias;
