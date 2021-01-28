import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux';
import { alterarNumMax, alterarNumMin } from '../store/actions/numeros';

const Intervalo = props => {
    const { min, max } = props.numero
console.log(props)
    return (
        <Card title="Intervalo de números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} onChange={(e) => props.alterMinimo(e.target.value)} />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} onChange={(e) => props.alterMaximo(e.target.value)} />
                </span>
            </div>
        </Card>)
}

function mapStateToProps(state) {
    return {
        numero: state.numeros
    }
}

function mapActionCreatorsToProps(dispatch) {
    return {
        alterMinimo(novoNumMin) {
            //action creator - > return uma action
            const action = alterarNumMin(novoNumMin)
            dispatch(action)
        },
        alterMaximo(novoNumMax){
            const action = alterarNumMax(novoNumMax)
            dispatch(action);
        }
    }
}
export default connect(
    mapStateToProps, 
    mapActionCreatorsToProps)
    (Intervalo)