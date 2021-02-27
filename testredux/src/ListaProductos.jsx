import * as actionTypes from './store/actions';
import { connect } from 'react-redux';

const ListaProductos = (props) => {

    return (
        <div>
            <h3>Número de productos: {props.numProd}</h3>
            <button onClick={props.onAddProducts}>Otro Producto</button>
            <button onClick={() => props.onSumProducts(5)}>Suma 5 productos</button>
        </div>
    )
}

// Valores del store a props del component
const mapStateToProps = state => {
    return {
        numProd: state.productos
    }
}

// Acciones del reducer a props del componente
const mapDispatchToProps = dispatch => {
    return {
        onAddProducts: () => dispatch({ type: actionTypes.ADD_PRODUCT }),
        onSumProducts: (num) => dispatch({ type: actionTypes.SUM_PRODUCT, value: num })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaProductos);