package com.hosp.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hosp.springboot.model.Hosp;

@Repository
public interface loginRepo extends JpaRepository<Hosp, Integer>{
	
	@Query("select count(d) from Hosp d where d.email = ?1")
	public List<Integer> emailExists(String email);
	
	@Query("select password from Hosp d where d.email = ?1")
	public String passwordExists(String email);

}