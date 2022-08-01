import React from 'react'
import '../App.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button className="btn btn-dark">Add Data</button>
                </div>

                <table className="table">
                    <thead className="table-dark">
                        <tr >
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>abc@gmail.com</td>
                            <td>full stack dev</td>
                            <td>0129864124</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success '><VisibilityIcon /></button>
                                <button className='btn btn-primary'><EditIcon /></button>
                                <button className='btn btn-danger'><ClearIcon /></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home