import React, { Component } from 'react';

class ColumnFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            chkcreateddate: true,
            chkdescription: true,
            chkseverity: true,
            chkstatus: true
        }
        this.displayFilterItems = this.displayFilterItems.bind(this);
        this.getSeverityFilter = this.getSeverityFilter.bind(this);
        this.getStatusFilter = this.getStatusFilter.bind(this);
    }


    displayFilterItems(){

    }

    getSeverityFilter(e) {
        let filterSev = e.target.value;
        this.props.handleFilterSeverity({Severity: filterSev});
    }

    getStatusFilter(e) {
        let filterStatus = e.target.value;
        this.props.handleFilterSeverity({Status: filterStatus});
    } 


    render(){
        return(
            <div className="card text-right">
                <div className="card-header bg-white">
                    <button className="btn btn-light font-weight-bold" onClick={this.displayFilterItems}>Filter</button>
                </div>
                <div className="card-body">
                    <form  id="filterForm">
                        <h6 className="card-title align-right">Severity Filter</h6>
                        <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="sevfilter1" name="sevfilter" value="Minor" onClick={this.getSeverityFilter}/>
                            <label className="form-check-label" htmlFor="sevfilter1">Minor</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="sevfilter2" name="sevfilter" value="Major" onClick={this.getSeverityFilter} />
                            <label className="form-check-label" htmlFor="sevfilter2">Major</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="sevfilter3" name="sevfilter" value="Critical" onClick={this.getSeverityFilter} />
                            <label className="form-check-label" htmlFor="sevfilter3">Critical</label>
                        </div>
                        </div>
                        <h6 className="card-title align-right">Status Filter</h6>
                        <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="stafilter1" name="stafilter" value="Open" onClick={this.getStatusFilter} />
                            <label className="form-check-label" htmlFor="stafilter1">Open</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="stafilter2" name="stafilter" value="In Progress" onClick={this.getStatusFilter} />
                            <label className="form-check-label" htmlFor="stafilter2">In Progress</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="stafilter3" name="stafilter" value="Resolved" onClick={this.getStatusFilter} />
                            <label className="form-check-label" htmlFor="stafilter3">Resolved</label>
                        </div>
                        </div>
                    </form>
                </div>
          </div>
        );
    }
}

export default ColumnFilter;