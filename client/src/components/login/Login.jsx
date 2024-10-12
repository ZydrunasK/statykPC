import s from './login.module.css';

export function Login() {
    return (
        <>
            <div className={s.cont}>
                <form action="">
                    <div className={s.inputCont}>
                        <label htmlFor="username">username</label>
                        <input type="username" />
                    </div>
                    <div className={s.inputCont}>
                        <label htmlFor="password">password</label>
                        <input type="password" />
                    </div>
                    <button className={s.loginBtn} type='button'>Log In</button>
                </form>
            </div>
        </>
    )
}