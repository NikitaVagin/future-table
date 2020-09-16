import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchDataStart, onRowSelect} from '../../actions/actions';
import Table from '../table/table';
import DataSelected from '../data-selector/data-selector'
import DetailRowInfo from '../detail-row-info/detail-row-info';
import {Spin} from 'antd'

//TODO Add Types
const App = (props:any) => {
    
    const {fetchDataStart, data, loading} = props;
    let table;
    if(loading === false && data == true){
        table = <Table data={data} onSelect={props.onRowSelect} />
    } else{
        table = null
    }
    
    return (
        <div>
            <DataSelected selectData={fetchDataStart}/>
            {table}
            {/* <Spin size='large'/> */}
            {
            // <DetailRowInfo />
            }
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
        onRowSelect: (data:any) => dispatch(onRowSelect(data)),
        fetchDataStart: (url:string) => dispatch(fetchDataStart(url)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
