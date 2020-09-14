import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFectGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {

        // para probar Hook
        const { result,waitForNextUpdate } = renderHook( () =>  useFectGifs( 'One Puch' ));
        const { data , loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

        // const {  data, loading } = useFectGifs( 'One Puch' );


    });
    test('Debe de retornar un arreglo de imagenes y el laoding false', async () => {
       
        const { result, waitForNextUpdate } = renderHook( () =>  useFectGifs( 'One Puch' ));
        await waitForNextUpdate();
        
        const { data , loading } = result.current;
        
        expect( data.length ).toEqual(10);
        expect( loading ).toBe(false);
        
    });
    
    
    
});

