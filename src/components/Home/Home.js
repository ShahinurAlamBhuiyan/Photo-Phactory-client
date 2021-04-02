import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = () => {
    const [ photos, setPhotos ] = useState([]);

    useEffect(() => {
        fetch('https://blueberry-surprise-50914.herokuapp.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data))
    }, [])
    return (
        <div className='container'>
            <div className='row  mt-4  ml-auto'>
            {
                photos.map( photo => <SingleCard photo={photo} key={photo._id}></SingleCard> )
            }
        </div>
        </div>
    );
};

export default Home;