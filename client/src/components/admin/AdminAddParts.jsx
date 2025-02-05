import { useContext, useEffect, useState } from 'react';
import s from './adminPanel.module.css';
import { AdminSideBar } from './AdminSideBar.jsx';
import { AdminContext } from '../../context/AdminContext.jsx';


export function AdminAddParts() {

    const {partType} = useContext(AdminContext);
    const [structureData, setStructureData] = useState([]);
    const [partID, setPartID] = useState(0);
    
    const handlePartIDChange = (event) => {        
        setPartID(event.target.value);
    };
    
    useEffect(() => {
        fetch(`http://localhost:5123/api/dalys/${partType[partID - 1]}/structure`, {
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => setStructureData(data[0]))
        .catch(error => console.error(error))
    }, [partID, partType])
    
    const fieldNames = structureData.map(obj => obj.Field);
    const inputTypes = structureData.map(obj => obj.Type);
    const form = [];

    for (let i = 0; i < fieldNames.length; i++) {
        const inputType = inputTypes[i].includes('int') ? 'number' : 'text';
        form.push(
            <>
            <label key={i + 1} htmlFor={fieldNames[i]}>{fieldNames[i]} ({inputType})</label>
            <input key={i + 2} id={fieldNames[i]} type={inputType} />
        </>)
    }
    console.log(form);
    
    

    return (
        <section className={s.adminPanel}>
            <AdminSideBar />
                <div>
                    <form>
                        <label htmlFor='partType'>Part Type</label>
                        <select name="Part Type" id="partType" onChange={handlePartIDChange}>
                            <option defaultValue={0} disabled>Choose Type</option>
                            <option value={1}>Procesorius</option>
                            <option value={2}>Ausintuvas</option>
                            <option value={3}>Pagrindine-plokste</option>
                            <option value={4}>Atmintis</option>
                            <option value={5}>Kietasis-diskas</option>
                            <option value={6}>Vaizdo-plokste</option>
                            <option value={7}>Maitinimo-blokas</option>
                            <option value={8}>Korpusas</option>
                        </select>
                    </form>



                    <form key={123} className={s.partForm} action="POST">
                        {form.length === 0 ? 'Pick Which Part Type you want to add' : form}
                    </form>
                </div>
        </section>
    );
}