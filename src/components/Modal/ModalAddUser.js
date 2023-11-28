import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {fetchAllGroup, fetchCreateUser} from '../../services/userService';
import { truncate, values } from 'lodash';
import { toast } from 'react-toastify';
import _ from 'lodash';

const ModalAddUser = (props) => {
    const [groups, setGroups] = useState([])
    useEffect(() => {
        getAllGroup();
    }, [])
    

    const defaultUserData = {
        email: '',
        phone: '',
        name: '',
        address: '',
        password: '',
        gender: '', 
        groupId: ''
    }
    const validInputDefault = {
        validEmail: true,
        validPhone: true,
        validUsername: true,
        validAddress: true,
        validPassword: true,
        validGender: true,
        validGroup: true
    }

    const checkValidaterInput = () => {
        
    }

    const [userData, setUserData] = useState(defaultUserData);
    const [validInput, setValidInput] = useState(validInputDefault);

    const handleOnChangeInput = (value, name) => {
        let _userData = _.cloneDeep(userData);
        _userData[name] = value;
        setUserData(_userData);

    }

const getAllGroup = async () => {
    try {
        let reponsite = await fetchAllGroup();
        
        
        if (reponsite && reponsite.data.EC === 0) {
            console.log('group data ', reponsite.data.DT)
            setGroups(reponsite.data.DT)
            if (reponsite && reponsite.data.DT.length > 0) {
                let groupId = reponsite.data.DT[0].id
               setUserData({...userData,groupId:groupId})
            }
            
        } else {
            toast.error(reponsite.data.EM);
        }

    } catch (error) {
        
    }
}
    const handleSaveUser = async() => {
        let response = await fetchCreateUser(userData);



    console.log('Response insert user >>> :',response)
}

    return (
        <>
            <Modal
                {...props}
                show ={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <b>Add New User</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>

                        <div className="mb-3 col-12 col-sm-6 form-group">
                            <label htmlFor="" className="form-label">Email (<span className='red'>*</span>) :</label>
                            <input type="text"
                                className={validInput.validEmail ? "form-control" : "form-control is-invalid"}
                                name='email'
                            value={userData.email}
                                onChange={(event) => handleOnChangeInput(event.target.value,'email')}
                            />
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6 form-group">
                            <label htmlFor="" className="form-label">Phone number (<span className='red'>*</span>) :</label>
                            <input type="text"
                                className={validInput.validPhone ? "form-control" : "form-control is-invalid"}
                                name='phone' 
                                value={userData.phone}
                                onChange={(event) => handleOnChangeInput(event.target.value, 'phone')}
                            />
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                       
                        <div className="mb-3 col-12 col-sm-6 form-group">
                            <label htmlFor="" className="form-label">UserName (<span className='red'>*</span>) :</label>
                            <input type="text"
                                className={validInput.validUsername ? "form-control" : "form-control is-invalid"}
                                name='username'
                                value={userData.name}
                                onChange={(event) => handleOnChangeInput(event.target.value, 'name')}
                            />
                        </div>
                        <div className="mb-3 col-12 col-sm-6 form-group">
                            <label htmlFor="" className="form-label">Password (<span className='red'>*</span>) :</label>
                            <input type="text"
                                className={validInput.validPassword ? "form-control" : "form-control is-invalid"}
                                name='password' 
                                value={userData.password}
                                onChange={(event) => handleOnChangeInput(event.target.value, 'password')}
                            />
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="mb-3 col-12 col-sm-12 form-group">
                            <label htmlFor="" className="form-label">Address:</label>
                            <input type="text"
                                className={validInput.validAddress ? "form-control" : "form-control is-invalid"}
                                name='address'
                                value={userData.address}
                                onChange={(event) => handleOnChangeInput(event.target.value, 'address')}
                            />
                        </div>
                       
                        <div className="mb-3 col-12 col-sm-6 form-group">
                            <label htmlFor="" className="form-label">Gender : </label>
                        <div className='group-control'>
                            <div className="form-check form-check-inline ms-2">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" 
                                        value={userData.gender}
                                        onChange={(event) => handleOnChangeInput(event.target.value, 'gender')}
                                    />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Nu</label>
                            </div>
                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6 form-group">
                            <label htmlFor="" className="form-label">Group :</label>
                            <select className="form-select" name='groupId'
                                value={userData.group}
                                onChange={(event) => handleOnChangeInput(event.target.value, 'groupId')}
                            >
                                {groups.length > 0 && 
                                    groups.map((item, index) => (
                                        <option key={`group-${index}`} values={item.id} >{ item.name}</option>
                                    ))
                                }
                               
                            </select>
                        </div>
                        
                       
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"  onClick={props.onHide}>Close</Button>
                    <Button variant="primary" onClick={handleSaveUser}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalAddUser;



// function MyVerticallyCenteredModal(props) {
//     return (
        
//     );
// }

// function App() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//         <>
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//                 Launch vertically centered modal
//             </Button>

//             <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </>
//     );
// }

// render(<App />);