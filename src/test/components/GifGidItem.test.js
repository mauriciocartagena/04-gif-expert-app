import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';


import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de <GifGridItem />',()=>{

    test('Debe de mostrar <GifGridItem /> correctaménte', () => {

        const data = {
            id:1,
            title:'Hello World',
            url:'https://img2.rtve.es/a/5486015?w=1600&preview=1579261973819.jpg',
        }

        const wrapper = shallow(<GifGridItem data={ data } />);
        
        expect(wrapper).toMatchSnapshot();

    });
    

});