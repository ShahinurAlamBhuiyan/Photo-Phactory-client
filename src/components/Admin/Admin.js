import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddPhoto from './AddPhoto';
import ManagePhoto from './ManagePhoto';
import manageLogo from '../../images/grid 1.png'
import editLogo from '../../images/edit 1.png'
import plusLogo from '../../images/plus 1.png'

const Admin = () => {
    const [manageClick, setManageClick] = useState(true)
    const [addPhotoClick, setAddPhotoClick] = useState(false)
    const handleManageBtn = () => {
        setManageClick(true)
        setAddPhotoClick(false)
    }

    const handleAddedPhotoBtn = () => {
        setAddPhotoClick(true)
        setManageClick(false)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3' style={{ backgroundColor: 'navy', height: '80vh', width: '100vw' }}>
                    <h5 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>ADMIN PANEL</h5>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <Button onClick={handleManageBtn} style={{ color: 'white' }}><img width='18px' src={manageLogo} />
                     &nbsp;Manage photo</Button>
                        <Button onClick={handleAddedPhotoBtn} style={{ color: 'white' }}><img width='18px' src={plusLogo} />
                    &nbsp;Add photo</Button>
                        <Button style={{ color: 'white' }}><img width='18px' src={editLogo} />
                    &nbsp;Edit photo</Button>
                    </div>
                </div>
                <div className='col-md-9'>
                    {manageClick && <ManagePhoto />}
                    {addPhotoClick && <AddPhoto />}
                </div>
            </div>
        </div>
    );
};

export default Admin;