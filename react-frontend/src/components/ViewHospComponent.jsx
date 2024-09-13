import React, { Component } from 'react'
import HospService from '../services/HospService'

class ViewHospComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            patient: {}
        }
    }

    componentDidMount(){
        HospService.getPatientById(this.state.id).then( res => {
            this.setState({patient: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div style={{ marginTop: '8rem', backgroundColor: '#F7F7F7' }} className= "card col-md-6 offset-md-3 pl-3 pr-3 pt-4">
                    <h3 className = "text-center"> View Patient Details</h3>
                    <div className= "card-body pt-5">
                        <div className = "row ml-5">
                            <label style={{ fontWeight: 600, flex: 1 }}> Patient Name: </label>
                            <div style={{ flex: 1 }}> { this.state.patient.name }</div>
                        </div>
                        <div className = "row ml-5 mt-1">
                            <label style={{ fontWeight: 600, flex: 1 }}>  Patient Number: </label>
                            <div style={{ flex: 1 }}> { this.state.patient.number }</div>
                        </div>
                        <div className= "row ml-5 mt-1">
                            <label style={{ fontWeight: 600, flex: 1 }}> Patient Email: </label>
                            <div style={{ flex: 1 }}> { this.state.patient.emailId }</div>
                        </div>
                    
                        <div className= "row ml-5 mt-1">
                            <label style={{ fontWeight: 600, flex: 1 }}> Patient Address: </label>
                            <div style={{ flex: 1 }}> { this.state.patient.address }</div>
                        </div>
                        <div className= "row ml-5 mt-1">
                            <label style={{ fontWeight: 600, flex: 1 }}> Patient Issue: </label>
                            <div style={{ flex: 1 }}> { this.state.patient.issue }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewHospComponent
