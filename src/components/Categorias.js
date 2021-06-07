import React, { Component } from "react";
import axios from "axios";

class Categorias extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
      joke: "",
    };
    this.handlerJoke = this.handlerJoke.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => {
        this.setState({ category: res.data });
      })
      .catch((err) => console.log(err));
  }

  handlerJoke = function (e) {
    const opcion = e.target.value;

    axios
      .get("https://api.chucknorris.io/jokes/random?category=" + opcion)
      .then((res1) => {
        this.setState({ joke: res1.data.value });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-3">
            <h2>Categorías</h2>
            <select className="mt-3" onChange={this.handlerJoke}>
              <option value={-1}>Selecciona una categoría:</option>
              {this.state.category.map((elemento) => (
                <option key={elemento} value={elemento}>
                  {elemento}
                </option>
              ))}
            </select>
          </div>
          <div className="col-9">
            <h2>Frase</h2>
            <div className="mt-3">
              <p>{this.state.joke}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categorias;
