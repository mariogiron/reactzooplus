import { useState } from "react";

export default function Cabecera({ texto }) {

    const [cont, setCont] = useState(0);

    return (<div>
        <h1 className="header" data-testid="h1tag">{texto}</h1>
        <p data-testid="pcont">{cont}</p>
        <button onClick={() => setCont(cont + 1)}>Incrementa</button>
    </div>);
}