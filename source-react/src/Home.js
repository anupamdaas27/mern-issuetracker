import React, {Component} from 'react';

export default class Home extends Component{
    render(){
        return (
            <div className="mx-auto mt-5" style={{ backgroundColor: '#C2CACC', padding: '30px 50px', margin: '30px', width: '100%' }}>
                <div className="font-weight-bold text-center" ><p>Issue Tracker web application. </p>
                The data for issues are managed by the MongoDB. It has interface with express server through http to retrieve and store data.
                By clicking the Update button, we will be able to update the issue or change the status. 
                </div>
                <ul className="mt-4">
                <li>
                    <div>To add new issues click on Add New Button.</div> 
                </li>
                <li>
                    <div>To view issues click on List of Issues Button.</div>
                </li>
                </ul>
          </div>
        )
    }
}