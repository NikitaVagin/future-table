
import React, { Ref, Key } from 'react';
import {connect} from 'react-redux';
import {Alert} from 'antd'


interface isState {
    hasError: boolean
}
interface PropsType  {
    error?: any
}


class ErrorBoundary extends React.Component<PropsType, isState> {
    state = {
        hasError: false
    }
    hasError(){
        console.log(this.props);
        if(this.props.error){
            this.setState({
                hasError: true
            })
        }
    }
    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    render() {
        if(this.state.hasError){
            return <Alert message='Error' description='
            This is an error message that indicates something' type='error' showIcon/>
        }
        return (
            this.props.children
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        error: state.table.error
    }
}

export default connect(mapStateToProps, null)(ErrorBoundary);