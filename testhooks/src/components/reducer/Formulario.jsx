import { useReducer } from "react";

const initialState = {
    nombre: '',
    email: '',
    telefono: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_nombre':
            return {
                ...state,
                nombre: action.value
            }
        case 'change_email':
            return {
                ...state,
                email: action.value
            }
        case 'change_telefono':
            return {
                ...state,
                telefono: action.value
            }
        default: throw new Error('Acción no esperada');
    }
}

export default function Formulario() {

    const [data, dispatch] = useReducer(reducer, initialState);

    return (
        <form>
            <p>Nombre: {data.nombre}</p>
            <p>Email: {data.email}</p>
            <p>Telefono: {data.telefono}</p>
            <input
                type="text"
                name="nombre"
                onChange={event => dispatch({ type: 'change_nombre', value: event.target.value })}
            />
            <input
                type="text"
                name="email"
                onChange={event => dispatch({ type: 'change_email', value: event.target.value })}
            />
            <input
                type="text"
                name="telefono"
                onChange={event => dispatch({ type: 'change_telefono', value: event.target.value })}
            />
            <input type="submit" value="Enviar" />
        </form>
    );

}