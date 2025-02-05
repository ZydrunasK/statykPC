import React, { useContext, useEffect, useState } from 'react';
import s from './adminPanel.module.css';
import { AdminSideBar } from './AdminSideBar.jsx';
import { AdminContext } from '../../context/AdminContext.jsx';


export function AdminAddParts() {

    const {partType} = useContext(AdminContext);
    const [structureData, setStructureData] = useState([]);
    const [partID, setPartID] = useState(1);
    const [formData, setFormData] = useState({});
    
    const handlePartIDChange = (event) => {        
        setPartID(event.target.value);
        setFormData({});
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

    for (let i = 2; i < fieldNames.length; i++) {
        const inputType = inputTypes[i].includes('char') ? 'text' : 'number';
        form.push(
            <React.Fragment key={i + 200}>
            <label key={i + 1} htmlFor={fieldNames[i]}>{fieldNames[i]} ({inputType})</label>
            <input
                    required
                    key={i + 100}
                    id={fieldNames[i]}
                    type={inputType}
                    value={formData[fieldNames[i]] || ''}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            [fieldNames[i]]: e.target.value,
                        });
                    }}
            />
        </React.Fragment>)
    }
    
    async function handleNewPartFormSubmit(e) {
        e.preventDefault();
        const data = { ...formData, partID};
        
        try {
            const response = await fetch('http://localhost:5123/api/submit-part', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            console.log(response);
            
            
        } catch (error) {
            console.error('Submitting Form ERROR: ', error);
            alert('ERROR: FORM DIDNT SUBMIT')
        }
    }
    

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



                    <form key={123} className={s.partForm}  onSubmit={handleNewPartFormSubmit}>
                        {form}
                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>
        </section>
    );
}