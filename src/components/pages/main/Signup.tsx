import React, { useState, useEffect } from 'react';
import '../../../styles/pages/main/Login.css'

type formDataObject = {
    email: string |null;
    password: string | null;
    confirmPassword?: string | null;
}

const Signup: React.FC = () => {
    const [error, setError] = useState<string>();

    useEffect(() => {}, [])

    const validData = (formData: formDataObject): boolean => {
        let localError: string = '';

        if (!formData?.email?.length) {
            localError = "email cannot be empty";
        } else if (!formData?.password?.length) { 
            localError = "password cannot be empty";
        } else if (formData?.password !== formData?.confirmPassword) {
            localError = "password and confirmed password don't match";
        }

        if (localError) {
            setError(localError);
            return false;
        }
        setError('');
        return true;
    }

    const formSubmitHandler = async(e: React.FormEvent<HTMLFormElement>, apiMethod: string) => {
        e.preventDefault();
 
        const formData = new FormData(e.currentTarget);

        const jsonObject: formDataObject = {
            email: String(formData.get('signup-email')),
            password: String(formData.get('signup-password')),
            confirmPassword: String(formData.get('signup-confirm-password'))
        };

        if (validData(jsonObject)) {
            postFormData(jsonObject, apiMethod)
        }
    }

    const postFormData = async(formData: formDataObject, apiMethod: string) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/${apiMethod}`, {
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

              setError('');
        } catch (e) {
            let errorMessage = 'An error occurred on Singnup';
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            setError(errorMessage);
            console.log("Error on submitting Singup Data: ", e);
        }
    }

    return (
        <div className="login">
            <form id="signup-form" onSubmit={(e) => formSubmitHandler(e, "signup")} className="form">
                <div>
                    <label htmlFor="signup-email">email: </label>
                    <input id="signup-email" name="signup-email" type="email" />
                </div>
                <div>
                    <label htmlFor="signup-password">password: </label>
                    <input id="signup-password" name="signup-password" type="password" />
                </div>
                <div>
                    <label htmlFor="signup-confirm-password">confirm password: </label>
                    <input id="signup-confirm-password" name="signup-confirm-password" type="password" />
                </div>
                <button>Signup</button>
                { error && <p style={{color: "red"}}>{error}</p>}
            </form>
        </div>
    )
}

export default Signup;