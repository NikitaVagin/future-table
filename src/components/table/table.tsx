import React, {useState} from 'react';
import useSortedData from '../../hooks/hooks';
import './table.css';
import ReactPaginate from 'react-paginate';

const Table = (props:any) => {
    const {onSelect, data} = props;
    const [currentPage, setCurrentPage] = useState<number>(0);
    const {sortObj, checkSort, sortedData } = useSortedData(data);
    const getClassNames = (name:any) => {
        if (!sortObj) {
          return;
        }
        return sortObj.key === name ? sortObj.direction : null;
      };

    const columnNames = [
        'id',
        'firstName',
        'lastName',
        'email',
        'phone'
    ]


    const arrayChank = (arr:any, size:number) => {
        const chunked_arr = [];
        let index = 0;
        while (index < arr.length) {
        chunked_arr.push(arr.slice(index, size + index));
        index += size;
        }
        return chunked_arr;
    }
    
    const display = arrayChank(sortedData, 50)[currentPage];
    debugger
    return (
    <>
    <table className="table">
        <thead className='thead-dark'>
            <tr>
                {columnNames.map((item:string, index:number) => (
                   <th key={index} onClick={()=> checkSort(item)}>
                       {item}
                    <i className={'arrow-table ' + getClassNames(item)}></i>
                    </th> 
                ))}
            </tr>
    </thead>
    <tbody>
        {display.map((item:any, index:number) => (
             <tr key={index} onClick={()=>onSelect(item)}>
                <th scope='row'>{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
             </tr>
        ))}
    </tbody>
</table>
{
    (data.length > 50) ?
    <ReactPaginate 
    previousLabel={'previous'}
    nextLabel={'next'}
    breakLabel={'...'}
    breakClassName={'break-me'}
    pageCount={20}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={(value) => setCurrentPage(value.selected)}
    containerClassName={'pagination'}
    activeClassName={'active'}
/> : null}
</>
    )
}

export default Table;