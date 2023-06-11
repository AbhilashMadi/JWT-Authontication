import React, { useState } from "react";

const Login = () => {
    const [userDetails, setUserDetails] = useState({
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userDetails);
    };
    return (
        <form className='signup_form' onSubmit={handleSubmit}>
            <label htmlFor='Email'>Email</label>
            <input type='email' name='email' onChange={handleChange} />

            <label htmlFor='Password'>Password</label>
            <input type='password' name='password' onChange={handleChange} />

            {error && (
                <div className='error_container'>
                    <p className='form_error'>{error}</p>
                </div>
            )}

            <button type='submit'>Login</button>
        </form>
    );
};

export default Login;
