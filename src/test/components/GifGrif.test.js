import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrif } from '../../components/GifGrif';
import { useFectGifs } from '../../hooks/useFetchGifs';

//fingir la llamada a ese useFetchGifs
jest.mock('../../hooks/useFetchGifs');

describe('Prueba en el <GifGrid />', () => {

    const category = 'One punch';

    test('Debe de retornar Correactamente el <GifGrif /> ', () => {

        useFectGifs.mockReturnValue({
            data:[],
            loading:true
        });

        // rendiriza el <GifGrif /> para poder comparar
        const wrapper = shallow( <GifGrif category={ category } /> );
        
        // compara el wrapper con toMatchSnapshot() que hace una
        // nueva renderización
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs',() => {

        const gifs = [
            {
                id:'ABC',
                url:'http://localhost/cualquier/cosa.jpg',
                title:'Cualquier cosa',
            },
            {
                id:'GASS',
                url:'http://localhost/cualquier/cosa.jpg',
                title:'Cualquier cosa',
            },
            {
                id:'AggC',
                url:'http://localhost/cualquier/cosa.jpg',
                title:'Cualquier cosa',
            },
        
        ];

        useFectGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = shallow( <GifGrif category={ category } /> );
        
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        

    });
    
});
