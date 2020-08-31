import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Fruit(props) {
    const fruitArr = props.location.state.listOfFruits

    const oneFruit = fruitArr.filter(fruit => fruit.name === props.match.params.name)

    return (
        <div id="fruit-container">

            <div class='back-link'>
                <Link 
                    class='back-link-text'
                    to={'/'}
                >
                    Voltar
                </Link>
            </div>        
            

            <div class="single-card">
                <img src={oneFruit[0].photo} alt={oneFruit[0].name} class="single-card-img-top" />

                <div class="single-card-body">
                  <h5 class="single-card-title">{oneFruit[0].name}</h5>
                  <p class="single-card-text">
                    {oneFruit[0].portion} <br/> <br/>
                    Calorias: {oneFruit[0].calories} <br/> <br/>
                    Proteína: {oneFruit[0].protein} <br/> <br/>
                    Carboidratos: {oneFruit[0].carbohydrates} <br/> <br/>
                    Fibra: {oneFruit[0].fiber} <br/> <br/>
                    Gordura: {oneFruit[0].blubber} <br/> <br/>
                  </p>
                </div>
              </div>
        </div>
    )
}


