import React from 'react';
import Card from './Card';

const DogProfile = ({dogs, dogPicture}) => {
    const dogArray = dogs.map((value, i) =><Card dogPicture={dogPicture} key={dogs[i].id} id ={dogs[i].id} name ={dogs[i].name} breed ={dogs[i].breed} location ={dogs[i].location}/> )
    
    return(
     <div>
         {dogArray};
    </div>
    )
}

export default DogProfile;