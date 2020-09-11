import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrif } from './components/GifGrif';
//snipet para crear todo de una rafc 

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
       
    //     //Es una forma de agregar al array nuevos valores
    //     setCategories( [ ...categories, 'Hunter' ] );


    //     //Es una forma de agregar al array nuevos valores pero inversa ahora
    //     // setCategories( [ 'Hunter' , ...categories ] );

    //     //Otra forma de agregar
    //     // setCategories( cats => [ ...cats,'Hunter' ]);

    // }


    return (

        <React.Fragment>

            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={ setCategories } ></AddCategory>

            <ol>
                {
                    categories.map(( category ) =>  (
                        <GifGrif 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>


        </React.Fragment>
    )

};

export default GifExpertApp;