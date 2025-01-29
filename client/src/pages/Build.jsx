import { BuildPartsList } from '../components/buildPartsList/BuildPartsList.jsx';
import s from './pagesCSS/build.module.css';


export function Build() {


    return (

        <main className={s.main}>

            <section className={s.mainDiv}>

                <header className={s.head}>
                    <p className={s.para}>COMPATIBILITY STATUS</p>
                    <p className={s.para}>ESTIMATED WATAGE</p>
                </header>

                <div className={s.buildSect}>
                    {BuildPartsList()}
                </div>

                <footer className={s.foot}>
                    <p className={s.para}>KAZKAS DAR NZN</p>
                </footer>

            </section>
        </main>

    );
}