import React, { Component } from 'react';

class DescriptionSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        
        this.props.handleSearchWithinIssues(this.state.searchText);
    }
    handleChange(e) {
        let value = e.target.value;
        this.setState({searchText: value});
    } 

    render(){
        return(
            <div className="card">
                <div className="card-header bg-white">
                    <button className="btn btn-light font-weight-bold">Search Description</button>
                </div>
                <div className="card-body">
                    <div className='form-inline'>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <span><input className="form-control input-sm mr-1" type='text' id='search' onChange={this.handleChange} /></span>
                                <span style={{backgroundColor: "#D0D9DA"}}><input className="btn btn-primary"  type="submit" value="Search" /></span>
                            </div>
                        </form>
                    </div>
                </div>  
            </div>     
        );
    }
}

export default DescriptionSearch;