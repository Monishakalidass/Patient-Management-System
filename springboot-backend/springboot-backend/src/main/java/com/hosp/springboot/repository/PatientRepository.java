package com.hosp.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hosp.springboot.model.Patient;


public interface PatientRepository extends JpaRepository<Patient, Long>{
    
}
