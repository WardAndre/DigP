import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Fruit from '../Fruit/fruit';

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listOfFruits: []
        }

        this.getAllFruits = this.getAllFruits.bind(this)
    }

    getAllFruits() {
        axios.get(`http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json`)
        .then(responseFromApi => {
            console.log(responseFromApi.data)
          this.setState({
            listOfFruits: responseFromApi.data
          })
        })
      }
     
    componentDidMount () {
        this.getAllFruits();
    }   

    render() {
        
        return (
            <div>
                {this.state.listOfFruits.map(fruit => {
                    return (
                       <div> 
                        <h1>{fruit.name}</h1>
                        <h3>{fruit.calories}</h3>
                        <img src={fruit.photo} alt={fruit.name}/>
                        </div> 
                    )
                })}
            </div>
        )
    }
}