import { render } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe('Pruebas en <Gifitem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitma.jpg';

    test('Debe de hacer match con el snapshot ', () => {
      
        const {container} = render( <GifItem title={title} url={url} />)
        expect (container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render( <GifItem title={title} url={url} />)
        
        // Por completar
    })
});
