import React, {useState} from 'react';
import {connect} from 'react-redux';
import {onSearch} from '../../actions/actions';
import InputSearch from '../../components/input-search/input-search'


const SearchForTable = ({onSearch}:any) => {
    const [valueInput, setValueInput] = useState(''); 
    return (
        <InputSearch valueInput={valueInput} onChangeValue={setValueInput} onSearch={() => onSearch(valueInput)}/>
    )
}
const mapDispatchToProps =(dispatch:Function) => {
    return {
        onSearch: (data:string) => dispatch(onSearch(data))
    }
}

export default connect(null, mapDispatchToProps)(SearchForTable);