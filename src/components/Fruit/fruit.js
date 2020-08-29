import React from 'react'
import { Link } from 'react-router-dom'

export default function Fruit(props) {
    const fruitArr = props.location.state.listOfFruits

    const oneFruit = fruitArr.filter(fruit => fruit.name === props.match.params.name)

    return (
        <div>
            <Link to={'/'}>
                Voltar
            </Link>
            {console.log(oneFruit)}
            <p>{oneFruit[0].name}</p>
        </div>
    )
}


