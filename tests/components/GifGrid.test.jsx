import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";

jest.mock("../../src/hooks/useFetchGifs.js");

describe('GifGrid', () => {

    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img'))

    });
});
