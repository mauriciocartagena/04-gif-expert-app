import React from 'react'
import PropTypes from 'prop-types';

import { useFectGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrif = ({ category }) => {

    // para renombrar data:images
    const {  data:images, loading } = useFectGifs( category );
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{ category }</h3>
            {
                loading && <p className="animate__animated animate__flash">Loading...</p>
            }
             <div className="card-grid">  
                {/* <h3>{ count } </h3>
                <button onClick={ ()=> setCount( count+1 ) }></button> */}
                    {
                        images.map(( img )=>{
                            return(
                                <GifGridItem 
                                
                                    key={ img.id }
                                    { ...img }
                                >
                                </GifGridItem>
                            )
                        })  
                    } 

            </div>
        </>
    )
}
GifGrif.propTypes= {

    category:PropTypes.string.isRequired,

}