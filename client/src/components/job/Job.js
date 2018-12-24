import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/grid";
// import { List, ListItem } from "../../components/list";
import { Input, TextArea, FormBtn } from "../../components/form";
import API from "../../utils/API"
import './job.css'

class Job extends Component {
    state = {
        jobs: [],
        title: "",
        body: ""
    }

    componentDidMount(){
        this.loadJobs();
    }

    loadJobs = () => {
        API.getJobs()
            .then(res =>
                this.setState({
                    jobs: res.data
                }))
                .catch(err => console.log(err))    
            
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author){
            API.postJob({
                title: this.state.title,
                body: this.state.body
            })
              .then(res => this.loadJobs())
              .catch(err => console.log(err));
        }
    }
    render(){
        return(
                <div>
                <div className="handle">Drag from here</div>
                <div id ='mydiv' className="jobBox container">
                <div id = 'mydivheader'>
                    <div className='row'>
                        <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                        />
                        <div className='status col'>In Progress</div>
                        <Input
                            value={this.state.body}
                            onChange={this.handleInputChange}
                            name="body"
                        />
                        <FormBtn 
                            onClick={this.handleFormSubmit}
                        />
                    </div>
                </div>
                </div>
                </div>
        )
    }
}

export default Job;