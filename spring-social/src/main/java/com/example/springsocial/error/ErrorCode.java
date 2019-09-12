package com.example.springsocial.error;

public enum ErrorCode {
	GENERIC_ERROR(100,"Generic exception has occurred"),
	APPLICATION_CONFIG(101,"Error when configuring the application"),
	ENTITI(101,"Entiti name doesnt exist for the module"),
	DATABASE_CONNECTION(200,"The connection to the database failed"),
	DATABASE_TABLE(201,"The connection to the database failed"),
	REST_QUERY(201,"Custom query"),
	REST_FIND(300,"Find registers"),
	REST_CREATE(301,"Create a registrer"),
	REST_UPDATE(302,"Update a registrer"),
	REST_DELETE(303,"Delete a registrer"),
	REST_VALIDATIONS(304,"Validations");
	
	
	
	private final int _code;
	private final String _title;

	ErrorCode(int code, String title) {
		this._code = code;
	    this._title = title;
	}

	public int get_code() { return this._code; }
	public String get_title() { return this._title; }
	  
}
