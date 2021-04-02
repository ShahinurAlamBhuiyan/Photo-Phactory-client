import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddPhoto = () => {
    const { register, handleSubmit } = useForm();
    const [photoURL, setPhotoURL] = useState(null)
    const history = useHistory();

    const onSubmit = data => {
        const photoData = {
            caption: data.caption,
            salary: data.salary,
            photographer: data.photographer,
            photoURL: photoURL
        }
        const url = 'https://blueberry-surprise-50914.herokuapp.com/addPhotos';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(photoData)

        })

            .then(res => {
                console.log('server side response', res)
                history.push('/home')
            })
        console.log(photoData)
    };

    const handlePhotoUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'c8e30546c9d6ba922ea50fcbbb4708e9');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setPhotoURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log('i am here boss ', imageData)
    }


    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="captionForm">Photo Caption</label> <br />
                <input className="form-control" id='captionForm' name="caption" placeholder='write a short caption' ref={register} required />
                <br />
                <label for="photographerName">Photographer Name</label> <br />
                <input className="form-control" id='photographerName' name="photographer" ref={register} required />
                <br />
                <label for="salary">Salary (USD)</label><br />
                <input className="form-control" id='salary' name="salary" type='number' ref={register} required />
                <br />
                <input type='file' onChange={handlePhotoUpload} required />
                <br /><br />
                <input className='btn btn-danger' type="submit" />
            </form>
    );
};

export default AddPhoto;