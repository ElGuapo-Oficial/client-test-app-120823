import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/main/Login.css'

type formDataObject = {
    email: string | null;
    password: string | null;
}

const Login: React.FC = () => {
    const [error, setError] = useState<string>();

    useEffect(() => {}, [])

    const validData = (formData: formDataObject): boolean => {
        let localError: string = '';

        if (!formData?.email?.length) {
            localError = "email cannot be empty";
        } else if (!formData?.password?.length) { 
            localError = "password cannot be empty";
        }

        if (localError) {
            setError(localError);
            return false;
        }
        return true;
    }

    const formSubmitHandler = async(e: React.FormEvent<HTMLFormElement>, apiMethod: string) => {
        e.preventDefault();
 
        const formData = new FormData(e.currentTarget);

        const jsonObject: formDataObject = {
            email: String(formData.get('login-email')),
            password: String(formData.get('login-password'))
        };

        if (validData(jsonObject)) {
            postFormData(jsonObject, apiMethod)
        }
    }

    const postFormData = async(formData: formDataObject, apiMethod: string) => {
        try {
            const response = await fetch(`http://localhost:3001/${apiMethod}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();

            if (!response.ok) {
                // Throw an error with the message from the server
                throw new Error(data.message);
            }

              console.log('Login successful:', data);
              setError('');
              return data;
        } catch (e) {
            let errorMessage = 'An error occurred on Login';
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            setError(() => errorMessage);
            console.log("Error on submitting Login Data: ", e)
        }
    }

    return (
        <div className="login">
            <form id="login-form" onSubmit={(e) => formSubmitHandler(e, "login")} className='form'>
                <div>
                    <label htmlFor="login-email">email: </label>
                    <input id="login-email" name="login-email" type="email" />
                </div>
                <div>
                    <label htmlFor="login-password">password: </label>
                    <input id="login-password" name="login-password" type="password" />
                </div>
                <button>Login</button>
                <div>
                    <Link to="/signup"><button className="signup">Signup</button></Link>
                </div>
                { error && <p style={{color: "red"}}>{error}</p>}
            </form>
        </div>
    )
}

export default Login;