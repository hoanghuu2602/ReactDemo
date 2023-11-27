import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import { fetchListUser } from "../../../services/userService";

function User() {
    const [listUser, setListUser] = useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [currentLimit,setCurrentLimit]=useState(2)
    const [totalPages,setTotalPages]=useState(0)

    useEffect(() => {
        fetchUser()

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
    return (
        <>
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
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPages}
                        previousLabel="< previous"
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