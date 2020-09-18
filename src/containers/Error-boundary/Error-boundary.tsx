import React from 'react';
import {connect} from 'react-redux';


interface isState {
    hasError: any
}
interface PropsType  {
    error?: any
}


class ErrorBoundary extends React.Component<PropsType, isState> {
    state = {
        hasError: null
    }

    componentDidCatch(error:any, errorInfo:any){
        this.setState({
            hasError: errorInfo.componentStack
        })
    }
    componentDidUpdate(prevProps:PropsType){
        if(this.props.error !== prevProps.error){
            this.setState({
                hasError: this.props.error.message
            })
        }
    }
    render() {
        if(this.state.hasError){
            return (
                <div className="alert alert-danger" role="alert">
                        {this.state.hasError}
                </div>
            )
        }
        return (
            this.props.children
        )
    }
}

const mapStateToProps = (state:any, ownProps:any) => {
    return {
        error: state.table.error,
        ownProps
    }
}
export default connect(mapStateToProps, null)(ErrorBoundary);
