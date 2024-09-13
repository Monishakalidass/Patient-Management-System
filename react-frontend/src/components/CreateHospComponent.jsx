import React, { Component } from 'react'
import HospService from '../services/HospService';
class CreateHospComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            number: '',
            emailId: '',
            address:'',
            issue:''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changenumberHandler = this.changenumberHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changeissueHandler = this.changeissueHandler.bind(this)
        this.saveOrUpdatePatient = this.saveOrUpdatePatient.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
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
    }
    saveOrUpdatePatient = (e) => {
        e.preventDefault();
        let patient = {name: this.state.name,  number: this.state. number, emailId: this.state.emailId,address: this.state.address,issue: this.state.issue};
        console.log('patient => ' + JSON.stringify(patient));

        // step 5
        if(this.state.id === '_add'){
            HospService.createPatient(patient).then(res =>{
                this.props.history.push('/patients');
            });
        }else{
            HospService.updatePatient(patient, this.state.id).then( res => {
                this.props.history.push('/patients');
            });
        }
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changenumberHandler= (event) => {
        this.setState({ number: event.target.value});
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Patient</h3>
        }else{
            return <h3 className="text-center">Update Patient</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div style={{ borderRadius: '8px', backgroundColor: "#F7F7F7" }} className = "card mt-5 col-md-6 offset-md-3 offset-md-3 pl-3 pr-3 pt-4">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body pt-5">
                                    <form>
                                        <div className = "form-group">
                                            <label> Patient  Name: </label>
                                            <input placeholder="Enter the name of patient" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Patient Number: </label>
                                            <input placeholder="Enter the number of patient" name="number" className="form-control" 
                                                value={this.state.number} onChange={this.changenumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Patient Email: </label>
                                            <input placeholder="Enter the emailId of patient" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Patient Address: </label>
                                            <input placeholder="Enter the address of patient" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeaddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Patient Issue: </label>
                                            <input placeholder="Enter the issue of patient" name="issue" className="form-control" 
                                                value={this.state.issue} onChange={this.changeissueHandler}/>
                                        </div>

                                        <button className="btn btn-success mt-3" style={{ backgroundColor: '#00D000' }} onClick={this.saveOrUpdatePatient}>Add</button>
                                        <button className="btn btn-danger mt-3" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", backgroundColor: '#FF4655' }}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateHospComponent
