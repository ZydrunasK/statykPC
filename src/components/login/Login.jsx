import s from './login.module.css';

export function Login() {
    return (
        <>
            <div className={s.cont}>
                <div className={s.inputCont}>
                    <label htmlFor="">username</label>
                    <input type="text" />
                </div>
                <div className={s.inputCont}>
                    <label htmlFor="">password</label>
                    <input type="text" />
                </div>
                <button className={s.loginBtn}>Log In</button>
            </div>
        </>
    )
}