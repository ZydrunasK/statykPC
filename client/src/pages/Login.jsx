import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export function Login() {
    const {login} = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('email@email.com');
    const [password, setPassword] = useState('email@email.comemail@email.com');
    const [loginError, setLoginError] = useState('');

    function handleEmail(event) {
        setEmail(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();
    
        fetch('http://localhost:5123/api/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            if(data.status === 'success') {
                login();
                navigate('/')
            }
            if(data.status === 'error') {
                setLoginError(<div className="alert alert-danger" role="alert">Registracija nepavyko: {data.msg}</div>);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
        

    return (
        <>
        <main>
                <div className="container px-4">
                    <div className="row">
                        <h1 className='text-center'>Prisijungti</h1>
                    </div>
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-md-10 mx-auto col-lg-6 col-xl-5">
                            <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                                {loginError}
                                <div className="form-floating mb-3">
                                    <input type="email" onChange={handleEmail} value={email} className="form-control" id="email" placeholder="name@example.com" required />
                                    <label htmlFor="email">El. paštas</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" onChange={handlePassword} value={password} className="form-control" id="password" placeholder="Password" required />
                                    <label htmlFor="password">Slaptažodis</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Prisijungti</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}