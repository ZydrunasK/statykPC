import s from './pagesCSS/build.module.css';

export function Build() {

    const part = <div className={s.partDiv}>
        <img src="#" alt="partPIC" />
        <p className={s.para}>TYPE</p>
        <p className={s.para}>PART NAME / CHOOSE PART</p>
    </div>;

    return (

        <main className={s.main}>

            <div className={s.mainDiv}>

                <header className={s.head}>
                    <p className={s.para}>COMPATIBILITY STATUS</p>
                    <p className={s.para}>ESTIMATED WATAGE</p>
                </header>

                <section className={s.buildSect}>
                    {part}
                    {part}
                    {part}
                    {part}
                    {part}
                    {part}
                </section>

                <footer className={s.foot}>
                    <p className={s.para}>KAZKAS DAR NZN</p>
                </footer>

            </div>
        </main>

    );
}