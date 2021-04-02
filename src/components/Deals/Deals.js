import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const Deals = () => {
    const history = useHistory();
    const handleClick = () =>{
        history.push('/home')
    }
    return (
        <div className='container text-center mt-5'>
            <h3>Developer will fixed it soon.</h3>
            <Button variant='contained' color='secondary' onClick={handleClick}>Go to home</Button>
        </div>
    );
};

export default Deals;