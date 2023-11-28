import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { toast } from "react-toastify";

import { fetchListUser, fetchDeleteUser } from "../../../services/userService";
import ModalDelete from '../../Modal/ModalDelete'
import ModalAddUser from "../../Modal/ModalAddUser";


function User() {
    const [listUser, setListUser] = useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [currentLimit,setCurrentLimit]=useState(2)
    const [totalPages, setTotalPages] = useState(0)
    const [isShowDelete,setIsShowDelete]=useState(false)
    const [dataModal,setDataModal]=useState([])

    useEffect(() => {
        fetchUser();

    }, [currentPage]);
    const fetchUser = async () => {
        let reponsite = await fetchListUser(currentPage,currentLimit)
        if (reponsite && reponsite.data.EC === 0) {
            // console.log('data>>>', reponsite.data )
            setTotalPages(reponsite.data.DT.totalPages)
            setListUser(reponsite.data.DT.users)
        }

    }

    


    const handlePageClick = async (event) => {
        // alert(event.selected)
        setCurrentPage(+event.selected + 1)
        // const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        // setItemOffset(newOffset);
    };

    const handleDeleteUser =async (user) => {
        // console.log('usafh>>>',user)
        setDataModal(user)
        setIsShowDelete(true)        
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setIsShowDelete(false);

    const handleShow = () => setShow(true);

    const handleAction = async () => {
        let reponse = await fetchDeleteUser(dataModal)
        console.log('Delete >>>', reponse)
        // alert(user.id)
        if (reponse && reponse.data.EC === 0) {
            toast.success(reponse.data.EM)
            setIsShowDelete(false)
            setDataModal([])
            await fetchUser() 
        } else {
            toast.error(reponse.data.EM)
        }
    }
    return (
        <>
        

            <ModalDelete
                show={isShowDelete}
                handleClose={handleClose}
                messege="Ban cos thuc su muon xoa noi dung nay khong"
                handleAction={handleAction}
            />
            
            <ModalAddUser

            />





            <h1>Trang User xin chao</h1>
            <div className="header-user">
                <button className="btn btn-primary">Refesh</button>
                <button className="btn btn-success ms-3">Add New User</button>
            </div>
            <div className="content-user">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Group</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser && listUser.length > 0 ?
                            <>
                                {listUser.map((item, index) => (
                                    <tr key={`row-${index}`}>
                                        <th scope="row">{index + 1}</th>
                                        <th scope="row">{item.id}</th>
                                        <th scope="row">{item.email}</th>
                                        <th scope="row">{item.phone}</th>
                                        <th scope="row">{item.Group ? item.Group.name : ''}</th>
                                        <th scope="row">
                                            <button
                                                
                                                className="btn btn-warning">Edit</button>
                                            <button
                                                // onClick={handleShow}
                                                onClick={() => handleDeleteUser(item)}
                                                className="btn btn-danger ms-2">Delete</button>
                                        </th>
                                    </tr>
                                ))}

                            </>
                            :
                            <>
                                <tr><td>
                                    Not found
                                </td></tr>
                            </>
                        }


                    </tbody>
                </table>
            </div>
            <div className="footer-user">
                {totalPages > 0 &&
                    <ReactPaginate
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPages}
                        previousLabel="< Previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                }
            </div>
        </>

    );
}

export default User;