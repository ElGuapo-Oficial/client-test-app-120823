import '../../styles/pages/main/Login.css'

type formDataObject = {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}

const Login = () => {
    const formSubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
 
        const formData = new FormData(e.currentTarget);
        console.log("password: ", formData.get('password'));

        let jsonObject: formDataObject = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        try {
            const response = await fetch('someUrl', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(jsonObject)
            })

            if (!response.ok) {
                throw new Error('Error on Login Post');
            }
        } catch (error) {
            console.log("Error on submitting Login Data: ", error)
        }
    }

    return (
        <div className="login">
            <form onSubmit={formSubmitHandler} className="form">
                <div>
                    <label htmlFor="">email: </label>
                    <input id="email" name="email" type="email" />
                </div>
                <div>
                    <label htmlFor="">password: </label>
                    <input id="password" name="password" type="password" />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;