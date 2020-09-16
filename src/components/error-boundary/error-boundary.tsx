import React from 'react';
import {Alert} from 'antd'


interface isState {
    hasError: boolean
}

export default class ErrorBoundary extends React.Component<{}, isState> {
    state = {
        hasError: false
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
