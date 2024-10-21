import s from './parts.module.css';

export function Parts() {
    return (
        <main className={s.main}>

            <div className={s.filter}>

                <div className={s.filterDiv}>
                    <h2 className={s.specName}>spec name 1</h2>
                    <hr className={s.hr} />
                    <ul>
                        <li>list Item-1</li>
                        <li>list Item-2</li>
                        <li>list Item-3</li>
                    </ul>
                </div>

                <div className={s.filterDiv}>
                    <h2 className={s.specName}>spec name 2</h2>
                    <hr className={s.hr} />
                    <ul>
                        <li>list Item-1</li>
                        <li>list Item-2</li>
                        <li>list Item-3</li>
                    </ul>
                </div>

            </div>

            <div className={s.partsList}>
                <h2>parts</h2>
            </div>
        </main>
    );
}