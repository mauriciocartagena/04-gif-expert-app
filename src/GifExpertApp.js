import React,{ useState } from 'react';
//snipet para crear todo de una rafc 

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () =>{
       
        //Es una forma de agregar al array nuevos valores
        setCategories( [ ...categories, 'Hunter' ] );


        //Es una forma de agregar al array nuevos valores pero inversa ahora
        // setCategories( [ 'Hunter' , ...categories ] );

        //Otra forma de agregar
        // setCategories( cats => [ ...cats,'Hunter' ]);

    }


    return (

        <React.Fragment>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Agregar</button>


            <ol>
                {
                    categories.map(( category ) => {
                    return <li key={ category }> { category }</li>;
                    })
                }
            </ol>


        </React.Fragment>
    )

};

export default GifExpertApp;