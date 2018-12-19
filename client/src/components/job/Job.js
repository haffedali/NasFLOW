import React, { Component } from 'react';
import './job.css'

class Job extends Component {
    state = {}


    dragElement = (elmnt) => {
        console.log('test')
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
          // if present, the header is where you move the DIV from:
          document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV: 
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
    }

    componentDidMount(){
        this.dragElement(document.getElementById('mydiv'))
    }


    render(){
        return(
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
        )
    }
}

export default Job;