import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8080/api/v1";

class HospService {

    getPatients(){
        return axios.get(PATIENT_API_BASE_URL + "/patients") ;
    }

    createPatient(patient){
        return axios.post(PATIENT_API_BASE_URL + "/patients", patient);
    }

    getPatientById(patientId){
        return axios.get(PATIENT_API_BASE_URL + '/patients/' + patientId);
    }

    updatePatient(patient, patientId){
        return axios.put(PATIENT_API_BASE_URL + '/patients/' + patientId, patient);
    }

    deletePatient(patientId){
        return axios.delete(PATIENT_API_BASE_URL + '/patients/' + patientId);
    }
    
    login(user)
    {
        return axios.get(PATIENT_API_BASE_URL + '/login?email=' + user.email + '&password=' +user.password);
    }
    
    signup(user)
    {
        return axios.post(PATIENT_API_BASE_URL + '/signup',user);
    }
}

export default new HospService()