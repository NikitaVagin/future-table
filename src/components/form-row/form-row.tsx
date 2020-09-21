import React from 'react';

type PropsFormRowType = {
    inputs: Object,
    formInputs: string,
    activeButton: boolean,
    onChangeInput: (a:string, b: string) => Function,
    sendForm: () => Function
}

const FormRow  = (props:any) => {
    console.log(props);
   
    const {inputs, formInputs, activeButton, onChangeInput, sendForm} = props;
   
    return (
        <div className='w-100'>
        <form>
        < div className="form-row align-items-center">
            {
                Object.keys(inputs).map((item:any, index:any) => (
                <div className="col-auto" key={index}>
                    <input type="text" className="form-control mb-2" placeholder={`Enter ${item}`} name={item} value={formInputs[item]} onChange={(e) => onChangeInput(e.target.value, e.target.name)}/>
                </div>
                ))
            }
            <button type="submit" className={`col btn btn-primary mb-2 ${activeButton ? null : 'disabled'}`}
            disabled={activeButton ? false : true} onClick={sendForm}>Add to table</button>
            </div>
        </form>
    </div>
    )
}

export default FormRow;