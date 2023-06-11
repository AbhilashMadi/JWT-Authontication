import React, { useState } from "react";

const Register = () => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
    };
    return (
        <form className='signup_form' onSubmit={handleSubmit}>
            <label htmlFor='Name'>Name</label>
            <input type='text' name='name' onChange={handleChange} />

            <label htmlFor='Email'>Email</label>
            <input type='email' name='email' onChange={handleChange} />

            <label htmlFor='Password'>Password</label>
            <input type='password' name='password' onChange={handleChange} />

            {error && (
                <div className='error_container'>
                    <p className='form_error'>{error}</p>
                </div>
            )}

            <button type='submit'>Register</button>
        </form>
    );
};

export default Register;
