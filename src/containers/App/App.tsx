import React from 'react';
import {connect} from 'react-redux';
import VisibleTable from '../Visible-Table/Visible-Table'
import {fetchDataStart} from '../../actions/actions';
import SearchForTable from '../Serch-for-table/Serch-for-table'
import DataSelected from '../../components/data-selector/data-selector'
import DetailRowInfo from '../../components/detail-row-info/detail-row-info';
import Spinner from '../../components/spinner/spinner'

type AppType = {
    fetchDataStart: Function,
    data: Array<object> | [],
    loading: boolean
}
const App = (props:AppType) => {
    const {fetchDataStart, data, loading} = props;
    
    const spinner = loading ? <Spinner /> : null
    return (
        <div>
            <DataSelected selectData={fetchDataStart}/>
            <div className='container d-flex flex-column align-items-center'>
            {spinner}
            {
                
                (data.length > 1) ?
                <>
                <SearchForTable />
                <VisibleTable />
                </>
                : null 
            }
            {
                <div className='align-self-start'>
                    <DetailRowInfo/>
                </div>
            }
            </div>
        </div>
    )
}
const mapStateToProps = ({table: {data, loading}}:any) => {
    return {
        data,
        loading
    }
} 
const  mapDispatchToProps = (dispatch:Function) => {
    return {
        fetchDataStart: (url:string) => dispatch(fetchDataStart(url)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
