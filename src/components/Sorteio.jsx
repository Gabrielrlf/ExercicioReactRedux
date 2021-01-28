import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {
    const {min, max} = props.numero
    console.log(min, 'min')
    console.log(max, 'max')
    const aleatorio = parseInt(Math.random() * (max * min)) + min;
    return (
        <Card title="Sorteio de números" Purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>)
}

function MapStateToProps(state) {
    return {
        numero: state.numeros,
    }
}
export default connect(MapStateToProps)(Sorteio)