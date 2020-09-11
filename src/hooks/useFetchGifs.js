import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export  const  useFectGifs = ( category ) =>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{

        getGifs( category )
            .then(imgs=>{

                    setState({
                        data:imgs,
                        loading:false
    
                    });
            });

    },[ category ]);

    // // //Para que no haga peticion cada que se onClick del Button
    // useEffect( () => {
    //     getGifs(category).then(setImages  )
    // },[ category ] );

    

    return state; // { data:[] , loading:true }

}

