import React from 'react';

const InputSearch = (props:any) => {
    const {valueInput, onChangeValue, onSearch } = props;

    return( 
        <div className="input-group mb-3 ">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={valueInput} onChange={(e:any) => onChangeValue(e.target.value)}/>
            <div className="input-group-append">
            <button className="btn btn-outline-primary" type='button' onClick={onSearch}>Search</button>
            </div>
        </div>
    )
}

export default InputSearch;