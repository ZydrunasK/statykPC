import { useEffect, useState } from 'react';
import s from './pagesCSS/profile.module.css';

export function Profile() {

    const [data, setData] = useState('')

    useEffect(() => {
        fetch('http://localhost:5123/api/profile', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            setData({username: data.username, email: data.email});
        })
       .catch(console.error())
    }, [])

    return (
        <main className={s.main}>
            <div className={s.infoCont}>

                <div className={s.profileInfoCont}>
                    <img className={s.img} src="../src/assets/profile-pic-1.png" alt="profilePic" />

                    <div className={s.userDetailsCont}>
                        <h2>{data.username}</h2>
                        <p>{data.email}</p>
                        <p>BUILDS(NUM)</p>
                        <p>SETTINGS</p>
                    </div>

                </div>

                <div className={s.moreInfoCont}>
                    here will be more info of settings/builds
                </div>

            </div>

        </main>
    );
}