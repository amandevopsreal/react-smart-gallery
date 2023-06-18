import React,{Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            e:false,
        }
    }
    componentDidCatch(error,info)
    {
        this.setState({e:true});
    }
    render()
    {
        if(this.state.e)
        {
            return<h1>Oops something is wrong</h1>
        }
        else
        {
            return this.props.children
        }
    }
}

export default ErrorBoundary;