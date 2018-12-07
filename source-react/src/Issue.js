import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Issue extends Component{
        
    getIssue(){
        return (
            <ul className="list-group">
                {(this.props.columnCheck.indexOf('chkcreateddate') === -1) ? <li className="list-group-item" ><strong>Created Date: </strong>{this.props.task.CreatedDate}</li> : null }
                {(this.props.columnCheck.indexOf('chkdescription') === -1) ? <li className="list-group-item" ><strong>Description: </strong>{this.props.task.Description}</li> : null }
                {(this.props.columnCheck.indexOf('chkseverity') === -1) ? <li className="list-group-item" ><strong>Severity: </strong>{this.props.task.Severity}</li> : null }
                {(this.props.columnCheck.indexOf('chkstatus') === -1) ? <li className="list-group-item" ><strong>Status: </strong>{this.props.task.Status}</li> : null }
                {(this.props.columnCheck.indexOf('chkresolved') === -1) ? <li className="list-group-item" ><strong>Resolved Date: </strong>{this.props.task.ResolvedDate}</li> : null }
            </ul>
        );
    };

    

    render(){

        const editpath = `/issues/edit/${this.props.task._id}`;
        return(
        <div className="mt-1">
            <div>
                <div  className="card">
                    <div className="card-header" style={{backgroundColor: "#6D7070"}}>
                        <div className="row">
                        <div className="col-md-8">
                            <strong className="nav-link text-white">Issue ID: {this.props.task.Id}</strong>
                        </div>
                        <div className="col-md-2">
                            <Link className="nav-link btn text-white btn-primary float-right" to={editpath}>Update</Link>
                        </div>
                        <div className="col-md-2">
                            <button type="button"  className="nav-link btn btn-danger float-right" onClick={this.props.removeIssue}>Delete</button>
                        </div>
                        </div>
                    </div>

                    <div className="card-body" style={{backgroundColor: "#C2CACC"}}>
                        {this.getIssue()} 
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Issue;