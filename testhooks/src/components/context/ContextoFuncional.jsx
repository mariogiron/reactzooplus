import { useLoginContext, useLoginToggleContext } from "./LoginProvider";

export default function ContextoFuncional() {

    const user = useLoginContext();
    const cambiaLogin = useLoginToggleContext();

    return (
        <div>
            <h2>Contexto Funcional</h2>
            <button onClick={cambiaLogin}>Cambia login</button>
            {user && <p>Saludos{user.nombre} - {user.email}</p>}
        </div>
    );
}