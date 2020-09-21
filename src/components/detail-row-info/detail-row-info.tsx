import React from 'react';
import {connect} from 'react-redux';

type DetailRowInfoType = {
   selectRowInfo: {
    firstName: string,
    lastName: string,
    description: string,
    address: {
        streetAddress: string,
        city: string,
        state: string,
        zip: string
        }
   } | null
}

const DetailRowInfo = (props:any) => {
    if(!props.selectRowInfo){
        return null
    }
    const {firstName, lastName, description, address} = props.selectRowInfo;
    return(
        <div>
            <p>Выбран пользователь <b>{`${firstName} ${lastName}`}</b></p>
            {description ? <textarea value={description} readOnly/> : null}
            {address ?
            <>
            <p>Адрес проживания: <b>{address.streetAddress}</b></p>
            <p>Город: <b>{address.city}</b></p>
            <p>Провинция/штат: <b>{address.state}</b></p>
            <p>Индекс: <b>{address.zip}</b></p>
            </> :
            null
            }
        </div>
    )
};

const MapStateToProps = (state:any) => {
    return {
        selectRowInfo: state.table.selectRowInfo
    }
}

export default connect(MapStateToProps, null)(DetailRowInfo);
