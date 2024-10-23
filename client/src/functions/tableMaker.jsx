export function tableMaker(headArr, partsArr) {

    const head = [];
    for (const th of headArr) {
        head.push(<th key={th} className='partTableTh'>{th}</th>)
    }

    // const head = (
    //     <tr className='partTableTr'>
    //         {headArr.map(s => <th key={Math.random()*1000} className='partTableTh'>{s}</th>)}
    //     </tr>)
    // const body = partsArr.map(
    //     part => 
    //     <tr key={part.id} className='partTableTr'>
    //         <td className='partTableTd'>{part.name}</td>
    //         <td className='partTableTd'>{part.chipset}</td>
    //         <td className='partTableTd'>{part.formFactor}</td>
    //         <td className='partTableTd'>{part.memory}</td>
    //     </tr>
    //     );
    const body = [];
    for (const part of partsArr) {
        head.push(
            <tr key={part.id} className='partTableTr'>
                {headArr.map(str => <td key={str + 'Name'} className='partTableTd'>{part.str}</td>)}
            </tr>);
    }


    const table =(
    <table className='partsTable'>
        <thead className='partsTableThead'>
            {head}
        </thead>
        <tbody className='partsTableTbody'>
            {body}
        </tbody>
    </table>
    );

    return table;
}