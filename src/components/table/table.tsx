import React from 'react';
import './table.css';


type TableType = {
    data: object[],
    columnNames: Array<string>
    onClickSort: Function,
    getClassName: Function,
    onSelectRow: Function
}

const Table = (props:TableType) => {
    const {data, columnNames, onClickSort, getClassName, onSelectRow } = props;

    return (
    <table className="table">
        <thead className='thead-dark'>
            <tr>
                {columnNames.map((item:string, index:number) => (
                   <th key={index} onClick={()=> onClickSort(item)}>
                       {item}
                    <i className={'arrow-table ' + getClassName(item)}></i>
                    </th> 
                ))}
            </tr>
    </thead>
    <tbody>
        {data ? data.map((item:any, index:number) => (
             <tr key={index} onClick={()=> onSelectRow(item)}>
                <th scope='row'>{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
             </tr>
        )) : <tr><td colSpan={5} align='center'><b>По Вашему запросу ничего не найдено.</b></td></tr>}
    </tbody>
    </table>
    )
}

export default Table;