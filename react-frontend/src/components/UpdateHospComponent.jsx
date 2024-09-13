import React, { Component } from 'react'
import HospService from '../services/HospService';

class UpdateHospComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            number: '',
            emailId: '',
            address:'',
            issue:''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changenumberHandler = this.changenumberHandler.bind(this);
        this.changeaddressHandler = this.changeaadressHandler.bind(this);
        this.changeissueHandler = this.changeissueHandler.bind(this);
        this.updatePatient = this.updatePatient.bind(this);
    }

    componentDidMount(){
        HospService.getPatientById(this.state.id).then( (res) =>{
            let patient = res.data;
            this.setState({name: patient.name,
                number: patient.number,
                emailId : patient.emailId,
                address : patient.address,
                issue : patient.issue
            });
        });
    }

    updatePatient = (e) => {
        e.preventDefault();
        let patient = {name: this.state.name, number: this.state.number, emailId: this.state.emailId, address: this.state.address,issue: this.issue};
        console.log('patient => ' + JSON.stringify(patient));
        console.log('id => ' + JSON.stringify(this.state.id));
        HospService.updatePatient(patient, this.state.id).then( res => {
            this.props.history.push('/patients');
        });
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changenumberHandler= (event) => {
        this.setState({number: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeaddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changeissueHandler= (event) => {
        this.setState({issue: event.target.value});
    }

    cancel(){
        this.props.history.push('/patients');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Patient</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Patient Name: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Patient Number: </label>
                                            <input placeholder="number" name="number" className="form-control" 
                                                value={this.state.number} onChange={this.changenumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Patient Email: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Patient Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeaddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Patient Issue: </label>
                                            <input placeholder="Issue" name="issue" className="form-control" 
                                                value={this.state.issue} onChange={this.changeissueHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updatePatient}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateHospComponent
