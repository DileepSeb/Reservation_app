package org.jsp.reservationapi.exception;

public class IdNotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
public String getMessage() {
	return "the id is invalid";
}
}
