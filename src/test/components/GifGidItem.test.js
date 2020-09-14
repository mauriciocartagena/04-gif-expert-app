import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';


import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de <GifGridItem />',()=>{

    const data = {

        title:'Hello World',
        url:'https://img2.rtve.es/a/5486015?w=1600&preview=1579261973819.jpg',
    }

    const { title,url } = data;

    const wrapper = shallow(<GifGridItem  

            title = { title }
            url = { url }

        />
    );
    

    test('Debe de mostrar <GifGridItem /> correctaménte', () => {

        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de tener párrafo con el title',() => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('Debe de tener la imagen igual al url y alt de los props',() =>{ 

        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('debe de tener animate__fadeIn ',() =>     { 

        const div = wrapper.find('div');
        // console.log(div.prop('className'));

        const className = div.prop('className');


        expect(className.includes('animate__fadeIn')).toBe(true);

    });

    

});