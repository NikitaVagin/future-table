import React from 'react';
import './data-selector.css';
import {UrlData} from '../../constants/constants'

const DataSelected = ({selectData}:any) => {
    return (
        <div className='data-selector d-flex justify-content-center'>
            <button className="btn btn-light" onClick={() => selectData(UrlData.SMALL_DATA)}>Small Data</button>
            <button className="btn btn-dark" onClick={() => selectData(UrlData.BIG_DATA)}>Big Data</button>
        </div>
    )

}

export default DataSelected;