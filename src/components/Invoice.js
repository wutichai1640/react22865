import { useParams } from "react-router-dom";
import React, { Component } from 'react';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
  
class Invoice extends Component {
    constructor (props) {
        super(props)
        // this.invoieId = null
        this.state = {_invoiceId: null}
        // this.setState({ invoiceId: data.invoiceId }) 
        console.log(this.props.params.invoiceId)
    }
    componentDidMount = () => {
        let id = this.props.params.invoiceId
        this.setState({ _invoiceId: id }) 

        fetch('http://localhost:3100/tree')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
    
    render () {
        return (
            <div>
                <h2>Invoice {this.state._invoiceId}</h2>
            </div>
        )
    }

}

export default withParams(Invoice);