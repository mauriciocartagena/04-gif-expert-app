import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas de <GifExpertApp />', () => {

    test('Debe de mostrar correctamente el <GifExpertApp />', () => {

        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();
    });
    test('Debe de mostrar una lista de categorias', () => {

        const categories = ['One punch','Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrif').length ).toBe( categories.length );
         
    });
    

});
