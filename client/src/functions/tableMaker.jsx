/**
 * Makes simple table to show pc components(parts)
 * @param {Array} partInfoArr array of strings that match the keys which indicate the information of components wanted to show on the table
 * @param {Array} partsArr array of objects where objects are the components wanted to show
 * @param {Array} headerArr custom headers for the table (if no headers are given partInfoArr will be used as headers)
 * @returns A table of pc components(partsArr) with specific information(partInfoArr) from those components
 */
export function tableMaker(partInfoArr, partsArr, headerArr) {
    if (!Array.isArray(partInfoArr)
        || !Array.isArray(partsArr)) {
        return 'error: params must be arrays';
    }
    if (headerArr === undefined) {
        headerArr = partInfoArr;
    }
    if (partInfoArr.length !== headerArr.length) {
        return 'error: partInfoArr length and headerArr lenght must match';
    }

    const head = [];
    for (const th of headerArr) {
        head.push(<th key={th} className='partsTableTh'>{th}</th>)
    }
    const body = [];
    for (const part of partsArr) {
        body.push(
            <tr key={part.part_name + part.id} className='partsTableTr'>
                {partInfoArr.map(str => <td key={str + 'Name'} className='partsTableTd'>{part[str]}</td>)}
            </tr>);
    }


    const table =(
    <table className='partsTable'>
        <thead className='partsTableThead'>
            <tr className="partsTableHeadTr">
                {head}
            </tr>
        </thead>

        <tbody className='partsTableTbody'>
            {body}
        </tbody>

    </table>
    );

    return table;
}