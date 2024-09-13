import React, { Component } from 'react'
import HospService from '../services/HospService'

class ListHospComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patients: []
        }
        this.addPatient = this.addPatient.bind(this);
        this.editPatient = this.editPatient.bind(this);
        this.deletePatient = this.deletePatient.bind(this);
    }

    deletePatient(id) {
        HospService.deletePatient(id).then( res => {
            this.setState({patients: this.state.patients.filter(patient => patient.id !== id)});
        });
    }
    viewPatient(id){
        this.props.history.push(`/view-patient/${id}`);
    }
    editPatient(id){
        this.props.history.push(`/add-patient/${id}`);
    }

    componentDidMount(){
        HospService.getPatients().then((res) => {
            this.setState({ patients: res.data});
        });
    }

    addPatient(){
        this.props.history.push('/add-patient/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center mt-5"> Patient List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPatient}>
                        <i className="bi bi-clipboard2-plus mr-2"></i>
                        Add Patient
                    </button>
                 </div>
                 <br></br>
                 <div className = "row">
                    <table className = "table table-light">

                            <thead>
                                <tr>
                                    <th> Patient Name</th>
                                    <th>  Patient Number</th>
                                    <th>  Patient Email</th>
                                    <th>  Patient Address</th>
                                    <th>  Patient Issue</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.patients.map(
                                        patient => 
                                        <tr key = {patient.id}>
                                             <td> { patient.name} </td>   
                                             <td> {patient.number}</td>
                                             <td> {patient.emailId}</td>
                                             <td> {patient.address}</td>
                                             <td> {patient.issue}</td>
                                             <td>
                                                    <button onClick={() => this.editPatient(patient.id)} className="btn btn-primary">
                                                        <i className="bi bi-pencil-square mr-2"></i>
                                                        Edit
                                                    </button>
                                                    <button style={{ marginLeft: "10px", backgroundColor: '#FF4655' }} onClick={() => this.deletePatient(patient.id)} className="btn btn-danger">
                                                        <i className="bi bi-trash mr-2"></i>
                                                        Delete
                                                    </button>
                                                    <button style={{ marginLeft: "10px", backgroundColor: '#D2D2D2' }} onClick={() => this.viewPatient(patient.id)} className="btn btn-light">
                                                        <i className="bi bi-eye mr-2"></i>
                                                        View
                                                    </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListHospComponent
