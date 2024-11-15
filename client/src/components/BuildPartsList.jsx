import s from '../pages/pagesCSS/build.module.css';

export function BuildPartsList() {
    const partTypeList = [
        'Procesorius',
        'Aušintuvas',
        'Pagrindine plokštė',
        'Atmintis (RAM)',
        'Kietasis diskas',
        'Vaizdo plokštė',
        'Maitinimo blokas'
    ]
    function handleChoosePart(e) {
        console.log(e);
    }
    const html = partTypeList.map((part, id) => <div key={id} className={s.partDiv}>
        <img src="#" alt="partPIC" />
        <p className={s.para}>{part}</p>
        <p className={s.para}>PART NAME</p>
        <button onClick={handleChoosePart}>CHOOSE PART</button>
    </div>);
 
    return (
        <>
            {html}        
        </>
    )
}