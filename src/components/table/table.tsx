import React, {useState} from 'react';
import useSortedData from '../../hooks/useSortedData';
import './table.css';
import ReactPaginate from 'react-paginate';
import useArrayChunk from '../../hooks/useArrayChunk'
const Table = (props:any) => {
    console.log('ffff')
    const itemPerPage = 50;
    const {onSelect, data} = props;
    const [currentPage, setCurrentPage] = useState<number>(0);
    const {sortObj, checkSort, sortedData } = useSortedData(data);
    const getClassNames = (name:any) => {
        console.trace()
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
 
    const chunkData = useArrayChunk(sortedData, itemPerPage)[currentPage];
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
        {chunkData.map((item:any, index:number) => (
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
    previousClassName='page-item'
    nextClassName='page-item'
    previousLinkClassName='page-link'
    nextLinkClassName='page-link'
    breakLabel={'...'}
    breakClassName='page-item'
    breakLinkClassName='page-link'
    pageLinkClassName='page-link'
    pageCount={20}
    pageClassName='page-item'
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