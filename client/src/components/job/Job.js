import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './job.css'

class Job extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
                <div>
                <div className="handle">Drag from here</div>
                <div id ='mydiv' className="jobBox container">
                <div id = 'mydivheader'>
                    <div className='row'>
                        <div className='jobName col'>Nasco Job</div>
                        <div className='status col'>In Progress</div>
                    </div>
                    <div className='row'>
                        <div className='department col'>Vinyl</div>
                        <div className='dueDate col'>12-24</div>
                    </div>
                </div>
                </div>
                </div>
          </Draggable>
        )
    }
}

export default Job;