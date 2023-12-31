package org.jsp.reservationapi.dto;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable=false)
	private String name;
	@Column(nullable=false,unique = true)
	private long phone;
	@Column(nullable=false,unique = true)
	private String email;
	@Column(nullable=false,unique = true)
	private long aadhar;
	@Column(name="date_of_birh")
	private LocalDate dob;
	@Column(nullable= false)
	private String password;
	@OneToMany(mappedBy = "user")
	private List<Ticket> tickets;

}
