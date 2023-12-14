import React, { useState, useEffect } from 'react';
import '../../styles/pages/main/Login.css'

type formDataObject = {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}

const Login: React.FC = () => {
    const [error, setError] = useState<string>();

    useEffect(() => {}, [])

    const validData = (formData: formDataObject): boolean => {
        return true;
    }

    const formSubmitHandler = async(e: React.FormEvent<HTMLFormElement>, apiMethod: string) => {
        e.preventDefault();
 
        const formData = new FormData(e.currentTarget);
        console.log("password: ", formData.get('password'));

        let jsonObject: formDataObject = {
            email: formData.get('email'),
            password: formData.get('password')
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
            <div>
                <form id="signup-form" onSubmit={(e) => formSubmitHandler(e, "signup")}>
                    <div>
                        <label htmlFor="signup-email">email: </label>
                        <input id="signup-email" name="email" type="email" />
                    </div>
                    <div>
                        <label htmlFor="signup-password">password: </label>
                        <input id="signup-password" name="signup-password" type="password" />
                    </div>
                    <div>
                        <label htmlFor="signup-password-check">password: </label>
                        <input id="signup-password-check" name="signup-password-check" type="password" />
                    </div>
                    <button>Signup</button>
                    { error && <p style={{color: "red"}}>Error on signup</p>}
                </form>
            </div>

            <div>
                <form id="login-form" onSubmit={(e) => formSubmitHandler(e, "login")}>
                    <div>
                        <label htmlFor="login-email">email: </label>
                        <input id="login-email" name="login-email" type="email" />
                    </div>
                    <div>
                        <label htmlFor="login-password">password: </label>
                        <input id="login-password" name="login-password" type="password" />
                    </div>
                    <button>Login</button>
                    { error && <p style={{color: "red"}}>Invalid user or password</p>}
                </form>
            </div>
        </div>
    )
}

export default Login;