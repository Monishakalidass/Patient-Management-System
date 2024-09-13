package com.hosp.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "patient_s")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "Name")
	private String name;

	@Column(name = "Number")
	private String number;
	
	@Column(name = "EmailId")
	private String emailId;

	@Column(name = "Address")
	private String address;

	@Column(name = "Issue")
	private String issue;
	
	public Patient() {
		
	}
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	
	
	public Patient(long id, String name, String number, String emailId, String address, String issue) {
		super();
		this.id = id;
		this.name = name;
		this.number = number;
		this.emailId = emailId;
		this.address = address;
		this.issue = issue;
	}


	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getIssue() {
		return issue;
	}


	public void setIssue(String issue) {
		this.issue = issue;
	}
}
