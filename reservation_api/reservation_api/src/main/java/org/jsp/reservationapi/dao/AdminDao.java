package org.jsp.reservationapi.dao;

import java.util.Optional;

import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AdminDao {
	@Autowired
	private AdminRepository repository;
	
	
	public Admin saveAdmin(Admin admin){
	return repository.save(admin);

}
	public Admin updateAdmin(Admin admin){
		return repository.save(admin);
}
	public Optional<Admin> findById(int id){
		return repository.findById(id);
		
	}
	public Optional<Admin> verifyAdmin(long phone,String password){
		return repository.verifyAdmin(phone,password);
	}
}