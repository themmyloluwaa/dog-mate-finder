import React from 'react';

const Card = ({name, breed, id, location, dogPicture}) => {
    return (
        <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img style={{width: 300, height: 300}} src={dogPicture[id]} alt="dogs"/>
            <div>
                <h2>{`NAME: ${name}`}</h2>
                <p>{`BREED: ${breed}`}</p>
                <p>{`LOCATION: ${location}`}</p>
            </div>
        </div>
    )
}

export default Card;