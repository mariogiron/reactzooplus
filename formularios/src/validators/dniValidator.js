const validateDni = (value) => {
    const relacionLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(value)) {
        const numero = value.substr(0, value.length - 1);
        const letra = value.substr(value.length - 1, 1);
        const pos = numero % 23;
        const letraSeleccionada = relacionLetras.substring(pos, pos + 1);
        if (letraSeleccionada !== letra.toUpperCase()) {
            return false;
        } else {
            return true;
        }
    } else {
        return false
    }
}

export { validateDni };