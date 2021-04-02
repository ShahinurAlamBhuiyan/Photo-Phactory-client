import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://blueberry-surprise-50914.herokuapp.com/ordered?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    const classes = useStyles();
    return (
        <div className='container'>
            <div className='text-center'>
                <h3>Hello, {loggedInUser.displayName || loggedInUser.name}</h3>
                <h4>You have total {orders.length} orders.</h4>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Date</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Photographer Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Photo Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Salary (USD)</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map(order => (
                                <TableRow>
                                    <TableCell>{new Date(order.orderTime).toDateString('dd/MM/yyyy')}</TableCell>
                                    <TableCell>
                                        {order.hired}
                                    </TableCell>
                                    <TableCell>{order.caption}</TableCell>
                                    <TableCell>${order.salary}</TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;