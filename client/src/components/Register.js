import { React, useState } from 'react'

const Register = () => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        age: '',
        mobile: '',
        work: '',
        address: '',
        description: ''
    })


    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setInput((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    return (
        <div className="container">
            <form className="mt-5">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Name</label>
                        <input type="text" onChange={setData} value={input.name} name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Email</label>
                        <input type="email" onChange={setData} value={input.email} name='email' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Age</label>
                        <input type="text" onChange={setData} value={input.age} name='age' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Mobile no.</label>
                        <input type="text" onChange={setData} value={input.mobile} name='mobile' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Work</label>
                        <input type="text" onChange={setData} value={input.work} name='work' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Address</label>
                        <input type="text" onChange={setData} name='address' value={input.address} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" onChange={setData} value={input.description} name='description' id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register