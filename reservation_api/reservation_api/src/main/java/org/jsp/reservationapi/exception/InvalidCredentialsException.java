package org.jsp.reservationapi.exception;

public class InvalidCredentialsException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public String getMessage() {
		return "Invalid Phone number or Email or Password";
	}

}
