import s from './pagesCSS/profile.module.css';

export function Profile() {
    return (
        <main className={s.main}>
            <div className={s.infoCont}>

                <div className={s.profileInfoCont}>
                    <img className={s.img} src="../src/assets/profile-pic-1.png" alt="profilePic" />

                    <div className={s.userDetailsCont}>
                        <h2>USERNAME</h2>
                        <p>EMAIL</p>
                        <p>BUILDS</p>
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