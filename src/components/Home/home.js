import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
        <div className='title'>
            <h1> Frutas </h1>
        </div>
        <div className='app-body'>
        {this.state.listOfFruits.map((fruit, idx) => {
          return (
            <div key={idx}>
              <div className="card">
                <img src={fruit.photo} alt={fruit.name} className="card-img-top" />

                <div className="card-body">
                  <h5 className="card-title">{fruit.name}</h5>
                  <p className="card-text">
                    {fruit.portion} <br/> <br/>
                    Calorias: {fruit.calories}
                  </p>
                  <div className='link'>
                    <Link
                        className='link-text'
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
