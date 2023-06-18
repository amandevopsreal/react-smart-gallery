import React from 'react';
import './Card.css'

const Card=({ name,pic,position})=>
{
    
    return(
        <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`${pic}`} alt='image'/>
            <div>
                <h2>{name}</h2>
                <p>{position}</p>
            </div>
        </div>
    );
}

export default Card;