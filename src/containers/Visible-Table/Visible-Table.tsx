import React, {useState} from 'react';
import Table from '../../components/table/table';
import {connect} from 'react-redux';
import { onRowSelect} from '../../actions/actions';
import useSortedData from '../../hooks/useSortedData';
import ReactPaginate from 'react-paginate';
import useArrayChunk from '../../hooks/useArrayChunk'
import useFilterData from '../../hooks/useFilterData';
import FormForTable from '../../containers/Form-for-table/Form-for-table'


const VisibleTable = (props:any) => {
    const itemPerPage = 50;
    const columnNames = [
        'id',
        'firstName',
        'lastName',
        'email',
        'phone'
    ];

    const {onRowSelect, data, search} = props;
    const filterData = useFilterData(data, search);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const {sortObj, checkSort, sortedData } = useSortedData(filterData);

    const chunkData = useArrayChunk(sortedData, itemPerPage);
    const currentData = chunkData[currentPage];
    const pageCount = chunkData.length;
    const getClassNames = (name:string) => {
        if (!sortObj) {
          return;
        }
        return sortObj.key === name ? sortObj.direction : null;
      };
    return (
    <>
    <FormForTable />
    <Table columnNames={columnNames} data={currentData} onClickSort={checkSort} getClassName={getClassNames} onSelectRow={onRowSelect}/>
{
    (data.length > itemPerPage) ?
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
    pageCount={pageCount}
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

const mapStateToProps = ({table: {data, search}}:any) => {
    return {
        search,
        data
    }
} 

const  mapDispatchToProps = (dispatch:Function) => {
    return {
        onRowSelect: (data:any) => dispatch(onRowSelect(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTable);