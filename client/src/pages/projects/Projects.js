import React, { Component } from "react";
import JobColumn from "../../components/jobcolumn";

class Projects extends Component {
    // Draggable : HOWTOUSE

    // <Draggable
    // axis="both"
    // handle=".handle"
    // defaultPosition={{x: 0, y: 0}}
    // position={null}
    // grid={[25, 25]}
    // onStart={this.handleStart}
    // onDrag={this.handleDrag}
    // onStop={this.handleStop}>
    // </Draggable>
    render(){
        return(
        <div>
            <JobColumn />
        </div>
        )
    }
}

export default Projects;