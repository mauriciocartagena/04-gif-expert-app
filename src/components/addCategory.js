import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) =>{

        //cambiamos el valor de InputValue
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) =>{

        //evitamos que se haga el reinicio de la pagina al presionar el submit o "Enter "
        e.preventDefault();

        if(inputValue.trim().length > 2 ){

            setCategories( cats => [ inputValue,...cats ]);
            setInputValue('');
        }
         
    }

    return (
        <>
            <form onSubmit={ handleSubmit } >
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ (e)=> handleInputChange(e) }
                />
            </form>
        </>
    )
}
AddCategory.propTypes = {
    
    setCategories:PropTypes.func.isRequired,
     
}
