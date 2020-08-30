import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Fruit from "../Fruit/fruit";
import './styles.css'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfFruits: [],
    };

    this.getAllFruits = this.getAllFruits.bind(this);
  }

  getAllFruits() {
    axios
      .get(`http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json`)
      .then((responseFromApi) => {
        this.setState({
          listOfFruits: responseFromApi.data,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getAllFruits();
  }

  render() {
    return (
      <div id="home-container">
        <div class='title'>
            <h1> Frutas </h1>
        </div>
        <div class='app-body'>
        {this.state.listOfFruits.map((fruit) => {
          return (
            <div>
              <div class="card">
                <img src={fruit.photo} alt={fruit.name} class="card-img-top" />

                <div class="card-body">
                  <h5 class="card-title">{fruit.name}</h5>
                  <p class="card-text">
                    {fruit.portion} <br/> <br/>
                    Calorias: {fruit.calories}
                  </p>
                  <div class='link'>
                    <Link
                        class='link-text'
                        to={{
                        pathname: `/details/${fruit.name}`,
                        state: {
                            listOfFruits: this.state.listOfFruits,
                        },
                        }}
                    >
                        Mais informações...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}
