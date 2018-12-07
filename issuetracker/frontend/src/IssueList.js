import React  , {Component} from 'react';
import Issue from './Issue';
import { connect } from 'react-redux';
import  { addIssue, editIssue, removeIssue, getIssues, filterIssues, displayColumnIssues, displaySearchIssues} from './actionCreators';
import { Route } from 'react-router-dom';

import NewIssueForm from './NewIssueForm';
import EditIssueForm from './EditIssueForm';
import DescriptionSearch from './DescriptionSearch'; 
import ColumnFilter from './ColumnFilter';
import ColumnDisplay from './ColumnDisplay';



class IssueList extends Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleSearchDisplay = this.handleSearchDisplay.bind(this);
        this.state = {
            issues: this.props.issues,
            displaySearchFilter: "d-block"
        }
    }
    handleAdd(val){
        this.props.addIssue(val);
    }
    removeIssue(id){
        this.props.removeIssue(id);
    }
    handleEdit(val){    
        this.props.editIssue(val);
    }
    handleFilter(val){   
        this.props.filterIssues(val);
    }
    handleDisplay(val){   
        this.props.displayColumnIssues(val);
    }
    handleSearchDisplay(val){   
        this.props.displaySearchIssues(val);
    }
    
    editIssue(id){   
        this.props.editIssue(id);
    }   
    componentDidMount(){        
        //document.getElementById('displaySearchFilter').className = "d-block";
        this.setState({displaySearchFilter : "d-block"});
        this.props.getIssues();
    }
    componentWillMount(){        
        this.setState({displaySearchFilter : "d-block"});           
    }
    componentWillUpdate(){         
        if(this.props.match.path === '/issues'){
            document.getElementById('displaySearchFilter').className = "d-block";      
        } 
    }
    render(){          

        let issueArr = [], issues = [];
        
        if(this.props.filterCategory.hasOwnProperty('Severity') === true){
            issueArr = this.props.issues.filter(val => val.Severity === this.props.filterCategory.Severity);
        }else if(this.props.filterCategory.hasOwnProperty('Status') === true){
          issueArr = this.props.issues.filter(val => val.Status === this.props.filterCategory.Status);
        }else if(this.props.searchText !== '' && this.props.searchText !== undefined){            
            issueArr = this.props.issues.filter(val => val.Description.indexOf(this.props.searchText) !== -1);            
        }else{
              issueArr = this.props.issues;
        }
       
        if(issues.length === 0){
            issues = "<Issue removeIssue={} editIssue={} task={} key={} />";
        }
        issues = issueArr.map((val, index) => (
            <Issue 
                removeIssue={this.removeIssue.bind(this, val._id)} 
                editIssue={this.editIssue.bind(this, val._id)} 
                task={val}
                columnCheck={this.props.columnDisplay} 
                searchText={this.props.searchText} 
                key={val._id} 
            />
        ));

        return(
            <div className="container">
               <div className={this.state.displaySearchFilter} id="displaySearchFilter">     
                    <div className="card-group">
                        <div>
                            <DescriptionSearch handleSearchWithinIssues={this.handleSearchDisplay} getPreviousSearchText={this.props.searchText}/>
                        </div>                    
                        <div>
                            <ColumnFilter handleFilterSeverity={this.handleFilter}/>
                        </div>
                        <div>
                            <ColumnDisplay handleDisplayColumns={this.handleDisplay} columnCheck={this.props.columnDisplay}  />
                        </div>
                    </div>
                </div>
                <Route 
                    path="/issues/new" 
                    component={ props => (
                        <NewIssueForm {...props} handleSubmit={this.handleAdd} />
                    )} 
                />
                <Route 
                    path="/issues/edit/:issueId" 
                    component={ props => (
                        <EditIssueForm {...props} handleSubmit={this.handleEdit} />
                    )} 
                />
                <Route exact path="/issues" component={() => (
                    <div>{issues}</div>
                    
                )} />
            </div>
        );
    }
}

let mapStateToProps = (reduxState) => {
    return {
        issues: reduxState.issues,
        filterCategory: reduxState.filterCategory,
        columnDisplay: reduxState.columnDisplay,
        searchText: reduxState.searchText
    }
}
export default connect(mapStateToProps, {addIssue, editIssue, removeIssue, getIssues, filterIssues, displayColumnIssues, displaySearchIssues})(IssueList);