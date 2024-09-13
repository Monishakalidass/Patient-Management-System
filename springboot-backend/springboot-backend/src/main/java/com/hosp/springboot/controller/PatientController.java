package com.hosp.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hosp.springboot.exception.ResourceNotFoundException;
import com.hosp.springboot.model.Patient;
import com.hosp.springboot.repository.PatientRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PatientController {

	@Autowired
	private PatientRepository PatientRepository;
	
	// get all Patients
	@GetMapping("/patients")
	public List<Patient> getAllPatients(){
		return PatientRepository.findAll();
	}		
	
	// create Patient rest api
	@PostMapping("/patients")
	public Patient createPatient(@RequestBody Patient Patient) {
		return PatientRepository.save(Patient);
	}
	
	// get Patient by id rest api
	@GetMapping("patients/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {
		Patient Patient = PatientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));
		return ResponseEntity.ok(Patient);
	}
	
	// update Patient rest api
	
	@PutMapping("patients/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable Long id, @RequestBody Patient PatientDetails){
		Patient Patient = PatientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));
		
		Patient.setName(PatientDetails.getName());
		Patient.setNumber(PatientDetails.getNumber());
		Patient.setEmailId(PatientDetails.getEmailId());
		Patient.setAddress(PatientDetails.getAddress());
		Patient.setIssue(PatientDetails.getIssue());
		
		Patient updatedPatient = PatientRepository.save(Patient);
		return ResponseEntity.ok(updatedPatient);
	}
	
	// delete Patient rest api
	@DeleteMapping("patients/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable Long id){
		Patient Patient = PatientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));
		
		PatientRepository.delete(Patient);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
