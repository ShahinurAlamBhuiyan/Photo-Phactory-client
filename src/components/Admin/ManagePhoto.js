import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const ManagePhoto = () => {
    const [allPhotos, setAllPhotos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://blueberry-surprise-50914.herokuapp.com/photos')
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    const deletePhoto = id => {
        console.log(id)
        fetch(`https://blueberry-surprise-50914.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    const handleSubmit = () => {
        history.push('/home')
    }
    const classes = useStyles();
    console.log(allPhotos)
    return (
        <div className='text-center'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Photographer Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Photo Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Salary (USD)</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Remove\</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allPhotos.map(photo => (
                                <TableRow key={photo.name}>
                                    <TableCell>
                                        {photo.photographer}
                                    </TableCell>
                                    <TableCell>{photo.caption}</TableCell>
                                    <TableCell>${photo.salary}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => deletePhoto(photo._id)} size='small' color='secondary'><DeleteForeverIcon /></Button></TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
};

export default ManagePhoto;


{/* <h4>{photo.photographer}</h4>
                    <h5>{photo.name}</h5>
                    <button onClick={() => deletePhoto(photo._id)}>Delete</button> */}