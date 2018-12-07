import React, { Component } from 'react';

export default class NewIssueForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task:{
                    Id:'',
                    CreatedDate:'',
                    Description:'',
                    Severity:'',
                    Status:'',
                    ResolvedDate:''
                },
            displaySearchFilter: "d-none"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); 
           
    }
    handleSubmit (e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.task);
        e.target.reset();
 
        this.props.history.push("/");
    } 
    handleChange(e) {
        let value = e.target.value;
        let key = e.target.name;
        let {task}  = this.state;
        task[key] = value;
        this.setState({task});
    }
    componentWillMount(){
        let date = new Date();
        let dates = new Date();
        this.setState({task: 
            { ...this.state.task,
                Id: dates.getTime().toString(), CreatedDate: date.toString()
            }
        }); 
    }
    componentDidMount(){
        
        document.getElementById('displaySearchFilter').className = "d-none";
    }
    componentwillUnmount(){
        
        document.getElementById('displaySearchFilter').className = "d-block";
    }
    componentDidUpdate(){
                
    }

    render(){
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="card card-primary mt-1  mb-1">
                    <div className="card-header text-white" style={{backgroundColor: "#6D7070"}}>
                        <h5>Raise New Issue</h5>
                    </div>
                    <div className="card-body" style={{backgroundColor: "#C2CACC"}}>  
                        <div className="row">   
                        <div className="form-group col-md-6">
                            <label htmlFor="IssueId">Issue ID</label>
                            <input className="form-control" id="IssueId" name="Id"  type="text" readOnly value={this.state.task.Id}  />
                        </div>  
                        <div className="form-group col-md-6">
                            <label htmlFor="cd">Created Date</label>
                            <input className="form-control" id="cd" name="CreatedDate" type="text" readOnly value={this.state.task.CreatedDate} />
                        </div>
                        </div>
                
                        <div className="form-group">
                        <label htmlFor="des" >Description **</label>
                        <textarea className="form-control form-control-label"  id="des" required name="Description" type="text"  rows="3" onChange={this.handleChange} ></textarea>
                        <div className="invalid-feedback" >
                            Please describe the issue. It is a Mandatory Field.
                        </div>
                        </div>
                
                        <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="sev">Severity Level</label>
                            <div className="form-control" id="sev">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sev1" name="Severity" value="Minor" onChange={this.handleChange} />
                                <label htmlFor="sev1" className="form-check-label">Minor</label>
                            </div>
                            
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sev2" name="Severity" value="Major" onChange={this.handleChange} />
                                <label htmlFor="sev2" className="form-check-label">Major</label>
                            </div>
                            
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sev3" name="Severity" value="Critical" onChange={this.handleChange} />
                                <label htmlFor="sev3" className="form-check-label">Critical</label>
                            </div>
                            </div>
                        </div>
                
                        <div className="form-group col-md-6">
                            <label htmlFor="sta">Status</label>
                            <div className="form-control" id="sta">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sta1" name="Status" value="Open" onChange={this.handleChange} />
                                <label htmlFor="sta1" className="form-check-label">Open</label>
                            </div>
                            
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sta2" name="Status" value="In Progress" onChange={this.handleChange} />
                                <label htmlFor="sta2" className="form-check-label">In Progress</label>
                            </div>
                            
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sta3" name="Status" value="Resolved" onChange={this.handleChange} />
                                <label htmlFor="sta3" className="form-check-label">Resolved</label>
                            </div>
                            <div className="form-group mt-3" >
                                <label htmlFor="res">Resolved Date **</label>
                                <input className="form-control"  id="res" name="ResolvedDate"  type="date"/>
                                <div className="invalid-feedback">
                                Please select Resolved Date. It is a Mandatory Field.
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="help-block text-muted ml-3">
                            ** Mandatory field.
                        </div>
                        </div>
                    </div>
                    <div className="card-footer" style={{backgroundColor: "#D0D9DA"}}>
                        <input className="btn btn-primary"  type="submit" value="Save" />
                    </div>
                </div>
            </form>            
        )
    }
}