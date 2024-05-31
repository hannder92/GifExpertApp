import {fireEvent, render, screen} from "@testing-library/react";
import {GifExpertApp} from "../src/GifExpertApp.jsx";

describe('GifExpertApp', () => {

    const newCategory = 'Valorant';

    test('debe añadir una nueva categoria', () => {
        render(<GifExpertApp/>);
        screen.debug();

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1)

        fireEvent.input(input, {target: {value: newCategory + 2}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2)
    })

    test('no debe agregar categorias repetidas', () => {
        render(<GifExpertApp/>);

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1)
    });

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
    })

})
