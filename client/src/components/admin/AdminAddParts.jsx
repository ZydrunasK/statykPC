import { useContext, useState } from 'react';
import s from './adminPanel.module.css';
import { AdminSideBar } from './AdminSideBar.jsx';
import { AdminContext } from '../../context/AdminContext.jsx';


export function AdminAddParts() {

    const [partType, setPartType] = useState('');
    const {partTypeDataStructue, structureData} = useContext(AdminContext);
    
    const handlePartTypeChange = (event) => {        
        setPartType(event.target.value);
    };
    const fieldNames = structureData.map(obj => obj.Field);
    const inputTypes = structureData.map(obj => obj.Type);
    const form = [];

    for (let i = 0; i < fieldNames.length; i++) {
        form.push(
        <>
            <label htmlFor={fieldNames[i]}>{fieldNames[i]}</label>
            <input id={fieldNames[i]} type={inputTypes[i] === 'int' ? 'number' : 'text'} />
        </>)
    }
    console.log(form);
    
    

    return (
        <section className={s.adminPanel}>
            <AdminSideBar />
                <div>
                    <form>
                        <label htmlFor='partType'>Part Type</label>
                        <select name="Part Type" id="partType" onChange={handlePartTypeChange}>
                            <option value="1">Procesorius</option>
                            <option value="2">Ausintuvas</option>
                            <option value="3">Pagrindine-plokste</option>
                            <option value="4">Atmintis</option>
                            <option value="5">Kietasis-diskas</option>
                            <option value="6">Vaizdo-plokste</option>
                            <option value="7">Maitinimo-blokas</option>
                            <option value="8">Korpusas</option>
                        </select>
                    </form>



                    <form className={s.partForm} action="POST">
                        {form}
                    </form>
                </div>
        </section>
    );
}