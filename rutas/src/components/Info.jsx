export default function Info(props) {

    console.log('[Info] Render');

    function handleClick() {
        props.history.push('/about');
    }

    return (<>
        <p>Componente INFO</p>
        <button onClick={handleClick}>Navega a about</button>
    </>);
}