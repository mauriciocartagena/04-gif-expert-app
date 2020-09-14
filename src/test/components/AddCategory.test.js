import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
const { AddCategory } = require("../../components/AddCategory");


describe('Pruebas de <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory  setCategories={ setCategories } /> );

    // sirve para limpiar los tiempos de vida
    beforeEach(()=>{

        //limpia los most
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory  setCategories={ setCategories } /> );

    });


    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        
        const input =  wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{ 
            target:{ value:value } 
        });

        expect (wrapper.find('p').text().trim()).toBe(value);

    });

    test('No debe de postear la información con submit', () => {
            
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        //1.- simular el inputChange
        //2.- simular el submit
        //3.- setCategories se debe haber llamado
        //4.- el valor del input debe estar vacio ''

        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{ 
            target:{ value:value }
        });

        //simulamos el submit del formulario
        wrapper.find('form').simulate('submit',{ preventDefault() {} });

        //verifica cuantas veces fue llamado la función en este caso dos
        // expect( setCategories ).toHaveBeenCalledTimes(2);
        
        //verifica si se llama a la función 
        // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));


        expect( setCategories ).toHaveBeenCalled();
        expect( wrapper.find('input').text().trim() ).toBe( '' );
    })
    
    
    
    

})
