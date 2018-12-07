import React, { Component } from 'react';
import axios from 'axios';
import  {withRouter} from 'react-router-dom';

class EditIssueForm extends Component {
    constructor(props){

        super(props);
        this.state = {
            issue:{
                    Id:'',
                    CreatedDate:'',
                    Description:'',
                    Severity:'',
                    Status:'',
                    ResolvedDate:''
                },
                id: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);               
    }
    componentDidMount(){

        let id = this.props.match.params.issueId;
        let issue = {};
        document.getElementById('displaySearchFilter').className = "d-none";
        axios.get(`/api/${id}`)
        .then(res => {
          issue=res.data;    
          this.setState({issue,id});
        })
        .catch(error=> console.log(error));
      }

      
    handleSubmit (e) {
  
        e.preventDefault();
        axios.put(`/api/${this.state.issue._id}`,this.state.issue)
        .then(res=> this.props.history.push("/"))
        .catch(err => console.log(err));
    } 
    handleChange(e) {
        let value = e.target.value;
        let key = e.target.name;
        let {issue}  = this.state;
        issue[key] = value;
        this.setState({issue});
    } 
    componentwillUnmount(){        
        document.getElementById('displaySearchFilter').className = "d-block";
    }

    render(){
        let setSeverity = this.state.issue.Severity, selectSeverity1 = '', selectSeverity2 = '' , selectSeverity3 = '', setStatus = this.state.issue.Status, selectStatus1 = '', selectStatus2 = '' , selectStatus3 = '';
        if(setSeverity === "Minor"){selectSeverity1 = 'checked' }else if(setSeverity === "Major"){ selectSeverity2 = 'checked'  }else{ selectSeverity3 = 'checked'  }
        if(setStatus === "Open"){selectStatus1 = 'checked' }else if(setSeverity === "In Progress"){ selectStatus2 = 'checked'  }else{ selectStatus3 = 'checked'  }
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
                            <input className="form-control" id="IssueId" name="Id"  type="text" readOnly value={this.state.issue.Id}  />
                        </div>  
                        <div className="form-group col-md-6">
                            <label htmlFor="cd">Created Date</label>
                            <input className="form-control" id="cd" name="CreatedDate" type="text" readOnly value={this.state.issue.CreatedDate} />
                        </div>
                        </div>
                
                        <div className="form-group">
                        <label htmlFor="des" >Description **</label>
                        <textarea className="form-control form-control-label"  id="des" required name="Description" type="text"  rows="3"  onChange={this.handleChange} value={this.state.issue.Description} ></textarea>
                        <div className="invalid-feedback" >
                            Please describe the issue. It is a Mandatory Field.
                        </div>
                        </div>
                
                        <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="sev">Severity Level</label>
                            <div className="form-control" id="sev">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sev1" name="Severity" value="Minor" checked={selectSeverity1} onChange={this.handleChange} />
                                <label htmlFor="sev1" className="form-check-label">Minor</label>
                            </div>
                            
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sev2" name="Severity" value="Major" checked={selectSeverity2} onChange={this.handleChange} />
                                <label htmlFor="sev2" className="form-check-label">Major</label>
                            </div>
                            
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sev3" name="Severity" value="Critical"  checked={selectSeverity3} onChange={this.handleChange} />
                                <label htmlFor="sev3" className="form-check-label">Critical</label>
                            </div>
                            </div>
                        </div>
                
                        <div className="form-group col-md-6">
                            <label htmlFor="sta">Status</label>
                            <div className="form-control" id="sta">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sta1" name="Status" value="Open" checked={selectStatus1} onChange={this.handleChange} />
                                <label htmlFor="sta1" className="form-check-label">Open</label>
                            </div>
                            
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sta2" name="Status" value="In Progress" checked={selectStatus2}  onChange={this.handleChange} />
                                <label htmlFor="sta2" className="form-check-label">In Progress</label>
                            </div>
                            
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="sta3" name="Status" value="Resolved" checked={selectStatus3}  onChange={this.handleChange} />
                                <label htmlFor="sta3" className="form-check-label">Resolved</label>
                            </div>
                            <div className="form-group mt-3" >
                                <label htmlFor="res">Resolved Date **</label>
                                <input className="form-control"  id="res" name="ResolvedDate" onChange={this.handleChange} value={this.state.issue.ResolvedDate}  type="date"/>
                                <div className="invalid-feedback">
                                Please select Resolved Date. It is a Mandatory Field.
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className="card-footer" style={{backgroundColor: "#D0D9DA"}}>
                        <input className="btn btn-primary"  type="submit" value="Edit Issue" />
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(EditIssueForm);