import React, { Component } from 'react';

class ColumnDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            chkcreateddate: true,
            chkdescription: true,
            chkseverity: true,
            chkstatus: true,
            chkresolved:true
        }
        this.setDisplay = this.setDisplay.bind(this);
    }

    setDisplay = (e) => {   
        let columnDisplayForm = document.forms['customForm'].elements['customitem[]']; 
        let columnDisplayArr = [];
        columnDisplayForm.forEach(function(val, index){ 
            if(columnDisplayForm[index].checked !== true){ 
                columnDisplayArr.push(columnDisplayForm[index].id)
            }
        });
        this.props.handleDisplayColumns(columnDisplayArr);
    }

    render(){
        
        return(
            <div className="card">
                <div className="card-header bg-white">
                    <button className="btn btn-light font-weight-bold">Customise</button>
                </div>
                <div className="card-body">
                    <form  id="customForm">
                        <h6 className="card-title align-right ">Customise View</h6>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkcreateddate" name="customitem[]" checked={(this.props.columnCheck.indexOf('chkcreateddate') === -1) ? true : '' } onChange={this.setDisplay}  />
                                <label className="form-check-label" htmlFor="item1">Created Date</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkdescription" name="customitem[]" checked={(this.props.columnCheck.indexOf('chkdescription') === -1) ? true : '' } onChange={this.setDisplay}  />
                                <label className="form-check-label" htmlFor="item2">Description</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkseverity" name="customitem[]" checked={(this.props.columnCheck.indexOf('chkseverity') === -1) ? true : '' }  onChange={this.setDisplay}  />
                                <label className="form-check-label" htmlFor="item3">Severity</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkstatus" name="customitem[]" checked={(this.props.columnCheck.indexOf('chkstatus') === -1) ? true : '' } onChange={this.setDisplay}  />
                                <label className="form-check-label" htmlFor="item4">Status</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkresolved" name="customitem[]" checked= {(this.props.columnCheck.indexOf('chkresolved') === -1) ? true : '' } onChange={this.setDisplay}  />
                                <label className="form-check-label" htmlFor="item5">Resolved Date</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ColumnDisplay;