import { render, fireEvent } from '@testing-library/react';
import Cabecera from './Cabecera';

describe('<Cabecera />', () => {

    it('renderiza correctamente', () => {
        const { asFragment } = render(<Cabecera texto="adios" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Introduce texto en la cabecera', () => {
        const { getByTestId, getByText } = render(<Cabecera texto="hola" />);
        expect(getByTestId('h1tag')).toHaveTextContent('hola');
        expect(getByText('hola')).toHaveClass('header');
    });

    it('Incrementa con el click en el botón', () => {
        const { getByText, getByTestId, getBy } = render(<Cabecera texto="cabecera2" />);
        fireEvent.click(getByText('Incrementa'));
        expect(getByTestId('pcont')).toHaveTextContent(1);
        // Si la ejecución es asíncrona se usan los método findBy....
    });

})