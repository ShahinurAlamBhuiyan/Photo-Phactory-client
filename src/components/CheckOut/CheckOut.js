import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [photo, setPhoto] = useState({})
    const { id } = useParams();
    useEffect(() => {
        fetch('https://blueberry-surprise-50914.herokuapp.com/photo/' + id, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setPhoto(data))
    }, [id])

    const history = useHistory();

    const handleCheckOut = () => {
        const checkoutDetails = { ...loggedInUser, hired: photo.photographer, caption: photo.caption, salary: photo.salary, orderTime: new Date() }

        fetch('https://blueberry-surprise-50914.herokuapp.com/addCheckout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkoutDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {

                    history.push('/orders')
                }
            })
    }
    const classes = useStyles();
    console.log(photo)
    return (
        <div className='container'>
            <h3 className='text-center mb-3'>Check out</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Photographer Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Photo Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Salary (USD)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell>{photo.photographer}</TableCell>
                            <TableCell>{photo.caption}</TableCell>
                            <TableCell>${photo.salary}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <div className='d-flex justify-content-center align-items-center'>
                <Button onClick={handleCheckOut} size='small' variant='contained' color='secondary'>save</Button></div>
        </div>
    );
};

export default CheckOut;