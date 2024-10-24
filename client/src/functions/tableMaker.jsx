export function tableMaker(headArr, partsArr) {

    const head = [];
    for (const th of headArr) {
        head.push(<th key={th} className='partTableTh'>{th}</th>)
    }
    const body = [];
    for (const part of partsArr) {
        head.push(
            <tr key={part.id} className='partTableTr'>
                {headArr.map(str => <td key={str + 'Name'} className='partTableTd'>{part[str]}</td>)}
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