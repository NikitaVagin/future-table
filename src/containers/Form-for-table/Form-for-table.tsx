import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addRowTable} from '../../actions/actions'
import FormRow from '../../components/form-row/form-row';

type ConfigType = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
}

type PropsType = {
    addRowTable: Function
}
const FormForTable = (props:PropsType) => {

    const {addRowTable} = props;
    const inputsName = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    }
    const [showForm, setShowForm] = useState<boolean>(false);
    const [formInputs, setFormInputs] = useState<ConfigType>(inputsName);
    const [activeButton, setactiveButton] = useState<any>(false);
    
    //Simple validation
    const validationInputs = (value:string, name:string) =>{
        const expReg = (name === 'id') ? /(^\d+$)|(^\s*$)/ : /(^\w+)|(^\s*$)/
        if(expReg.test(value)){
            setFormInputs({...formInputs, [name]:value})
        }else{
            setFormInputs({...formInputs})
        }
    }

    //Check sendButton
    useEffect(() => {
        const contains = Object.values(formInputs).some((item:any) => item === '');
        contains ? setactiveButton(false) : setactiveButton(true);
    }, [formInputs]);

    const sendForm = (e:any) => {
        e.preventDefault();
        addRowTable(formInputs);
    }
    return (
        <div className='w-100'>
            <div className='align-self-start mb-3'>
            <button type="button" className="btn btn-info " 
            onClick={()=> setShowForm((showForm:boolean) => !showForm)}
            >Add new row</button>
            </div>
            <div>
            {showForm ? <FormRow sendForm={(e:any) => sendForm(e)} inputs={inputsName} formInputs={formInputs} activeButton={activeButton} onChangeInput={validationInputs}/> : null}
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch:Function) => {
    return {
        addRowTable: (data:object) => dispatch(addRowTable(data))
    }
}

export default connect(null, mapDispatchToProps)(FormForTable);