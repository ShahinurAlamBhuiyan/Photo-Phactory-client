import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://blueberry-surprise-50914.herokuapp.com/photos')
            .then(res => res.json())
            .then(data => {
                setPhotos(data);
            })
    }, [])
    return !photos.length ? (
        <div className='d-flex justify-content-center align-items-center mt-5'><CircularProgress color="secondary" /></div>
    ) : (
        <div className='container mt-4'>
            <div className='row ml-auto'>
                {
                    photos.map(photo => <SingleCard photo={photo} key={photo._id}></SingleCard>)
                }
            </div>
        </div>
    )
};

export default Home;

{/* <div className='d-flex justify-content-center align-items-center mt-5'><CircularProgress color="secondary" /></div> */ }