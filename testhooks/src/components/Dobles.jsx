// USO DE useCallback

import { useState, useCallback } from 'react';
import MostrarDoble from './MostrarDoble';

export default function Dobles() {

    const [numero, setNumero] = useState(0);
    const [mensaje, setMensaje] = useState('');

    const getDoble = useCallback(() => {
        return numero * 2;
    }, [numero]);

    return (
        <div>
            <p>Número: {numero}</p>
            <p>Mensaje: {mensaje}</p>
            <button
                onClick={() => setNumero(numero => numero + 1)}>
                Incrementar
            </button>
            <input type="text" onChange={(e) => setMensaje(e.target.value)} />
            <MostrarDoble getDoble={getDoble} />
        </div>
    );

}