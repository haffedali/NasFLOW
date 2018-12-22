import React, { Component } from 'react';
import Job from '../job';
import './JobColumn.css';

class JobColumn extends Component {
    state = {}

    render(){
        return(
            <div className="container">
                <div className = "job-column">
                    <Job />
                </div>
            </div>
        )
    }
}

export default JobColumn;