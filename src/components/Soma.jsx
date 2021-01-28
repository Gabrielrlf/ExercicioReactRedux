import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = props => {
    const {min, max} = props.numero
    return (
        <Card title="Soma de números" Green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
                </span> 
            </div>
        </Card>)
}
function mapStateToProps(state) {
    return {
        numero: state.numeros,
    }
} 
export default connect(mapStateToProps)(Soma)