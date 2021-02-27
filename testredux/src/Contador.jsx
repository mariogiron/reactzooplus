import { connect } from 'react-redux';

const Contador = (props) => {

    return (
        <div>
            <h3 style={{ backgroundColor: 'red' }}>Número de productos: {props.numProd}</h3>
        </div>
    )
}

// Valores del store a props del component
const mapStateToProps = state => {
    return {
        numProd: state.productos
    }
}

export default connect(mapStateToProps)(Contador);