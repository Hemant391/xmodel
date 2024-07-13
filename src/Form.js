import { useState } from "react";
import './Form.css';


export default function Form({ setIsOpen }) {
    const [formdata, setFormdata] = useState({
        username: '',
        email: '',
        phone: '',
        dob: '',
    })


    const handlesubmit = (e) => {
        e.preventDefault();
        let curr = new Date().getTime();
        let arr = formdata.dob.split('-')
        let temp = new Date(arr[0], arr[1], arr[2]).getTime();
        if (formdata.phone.length < 10) {
            alert('**Invalid phone number. Please enter a 10-digit phone number.')
        } else if (curr < temp) {
            alert('123Invalid phone number. Please enter a 10-digit phone number.**')
        } else {
            setIsOpen(false)
        }


    }

    const handlechange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })

    }
    return (

        <div className="modal">

            <div className="modal-content" style={{width:'100%'}}>
                <form onSubmit={handlesubmit}>

                    <h3>Fill Details</h3>
                    <p>Username:</p>
                    <input id="username" name="username" type="text" value={formdata.username} onChange={handlechange} required />
                    <p>Email Address:</p>
                    <input id="email" name="email" type='email' value={formdata.email} onChange={handlechange} required />
                    <p>Phone Number:</p>
                    <input id="phone" name="phone" type='number' value={formdata.phone} onChange={handlechange} required />
                    <p>Date of Birth:</p>
                    <input id="dob" name="dob" type='date' value={formdata.dob} onChange={handlechange} required />
                    <div className="btn">

                        <button className="submit-button" type='submit'>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}