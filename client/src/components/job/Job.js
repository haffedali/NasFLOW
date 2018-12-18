import React, { Component } from 'react';
import './job.css'

class Job extends Component {
    state = {}
    render(){
        return(
            <div className="jobBox container">
                <div className='row'>
                    <div className='jobName col'>Nasco Job</div>
                    <div className='status col'>In Progress</div>
                </div>
                <div className='row'>
                    <div className='department col'>Vinyl</div>
                    <div className='dueDate col'>12-24</div>
                </div>
            </div>
        )
    }
}

export default Job;