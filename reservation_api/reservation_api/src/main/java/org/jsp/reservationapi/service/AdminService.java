package org.jsp.reservationapi.service;

import java.util.Optional;

import org.jsp.reservationapi.dao.AdminDao;
import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.exception.IdNotFoundException;
import org.jsp.reservationapi.exception.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
	@Autowired
	private AdminDao dao;
	
	
	public ResponseEntity<ResponseStructure<Admin>>saveAdmin(Admin admin){
		ResponseStructure<Admin> structure =new ResponseStructure<>();
		structure.setData(dao.saveAdmin(admin));
		structure.setMessage("admin saved successfully");
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.CREATED);
	}
	public ResponseEntity<ResponseStructure<Admin>>updateAdmin(Admin admin){
		ResponseStructure<Admin> structure =new ResponseStructure<>();
		structure.setData(dao.saveAdmin(admin));
		structure.setMessage("admin saved successfully");
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.CREATED);
	}
public ResponseEntity<ResponseStructure<Admin>>findById(int id){
	ResponseStructure<Admin>structure=new ResponseStructure<>();
	Optional<Admin> recAdmin=dao.findById(id);
	if(recAdmin.isPresent()) {
		structure.setData(recAdmin.get());
		structure.setMessage("Admin found");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.OK);
	}
	throw new IdNotFoundException();
}

public ResponseEntity<ResponseStructure<Admin>>verifyAdmin(long phone,String password){
	ResponseStructure<Admin>structure=new ResponseStructure<>();
	Optional<Admin>recAdmin=dao.verifyAdmin(phone,password);
	if(recAdmin.isPresent()) {
		structure.setData(recAdmin.get());
		structure.setMessage("Admin is verified sucessfully");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.OK);
	}
	throw new InvalidCredentialsException();
}
}
