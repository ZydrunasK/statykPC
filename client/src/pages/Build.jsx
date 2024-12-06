import { BuildPartsList } from '../components/buildPartsList/BuildPartsList.jsx';
import s from './pagesCSS/build.module.css';


export function Build() {


    return (

        <main className={s.main}>

            <div className={s.mainDiv}>

                <header className={s.head}>
                    <p className={s.para}>COMPATIBILITY STATUS</p>
                    <p className={s.para}>ESTIMATED WATAGE</p>
                </header>

                <section className={s.buildSect}>
                    {BuildPartsList()}
                </section>

                <footer className={s.foot}>
                    <p className={s.para}>KAZKAS DAR NZN</p>
                </footer>

            </div>
        </main>

    );
}