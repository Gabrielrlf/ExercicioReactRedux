import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Media = props => {
    console.log(props)
    const { min, max } = props.numero
    return (
        <Card title="Média de números" Blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2}</strong>
                </span> 
            </div>
        </Card>)
}

function mapStateToProps(state) {
    return {
        numero: state.numeros,
    }
} 

export default connect(mapStateToProps)(Media);