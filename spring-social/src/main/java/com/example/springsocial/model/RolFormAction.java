package com.example.springsocial.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "rol_form_action")
public class RolFormAction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
    @JoinColumn(name="rol_id", insertable=false, updatable=false)
    private Rol rol; 
    
	@Column(name = "rol_id")
    @JsonProperty("rol_id")
    private Long rol_id;
	
	@ManyToOne
    @JoinColumn(name="form_action_id", insertable=false, updatable=false)
    private FormAction formAction; 
    
	@Column(name = "form_action_id")
    @JsonProperty("form_action_id")
    private Long form_action_id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Rol getRol() {
		return rol;
	}

	public void setRol(Rol rol) {
		this.rol = rol;
	}

	public Long getRol_id() {
		return rol_id;
	}

	public void setRol_id(Long rol_id) {
		this.rol_id = rol_id;
	}

	public FormAction getFormAction() {
		return formAction;
	}

	public void setFormAction(FormAction formAction) {
		this.formAction = formAction;
	}

	public Long getForm_action_id() {
		return form_action_id;
	}

	public void setForm_action_id(Long form_action_id) {
		this.form_action_id = form_action_id;
	}
	
	 
}
