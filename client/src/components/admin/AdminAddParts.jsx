import s from './adminPanel.module.css';
import { AdminSideBar } from './AdminSideBar.jsx';


export function AdminAddParts() {
    return (
        <section className={s.adminPanel}>
            <AdminSideBar />
                <div>
                    <form>
                        <select name="Part Type" id="partType">
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
                        <label htmlFor="speed">speed</label>
                        <input id="speed" type="text" />
                        <label htmlFor="height">height</label>
                        <input id="height" type="text" />
                        <label htmlFor="ghz">ghz</label>
                        <input id="ghz" type="text" />
                        <label htmlFor="length">length</label>
                        <input id="length" type="text" />
                        <button type='submit' >SUBMIT</button>
                    </form>
                </div>
        </section>
    );
}