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
@Table(name = "form_action")
public class FormAction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
    @JoinColumn(name="form_id", insertable=false, updatable=false)
    private Form form; 
    
	@Column(name = "form_id")
    @JsonProperty("form_id")
    private Long form_id;
	
	
	@ManyToOne
    @JoinColumn(name="action_id", insertable=false, updatable=false)
    private Action action; 
    
	@Column(name = "action_id")
    @JsonProperty("action_id")
    private Long action_id;
	
	private Integer itemOrder;
	private String icon;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public Form getForm() {
		return form;
	}

	public void setForm(Form form) {
		this.form = form;
	}

	public Long getForm_id() {
		return form_id;
	}

	public void setForm_id(Long form_id) {
		this.form_id = form_id;
	}
	
	 public Action getAction() {
		return action;
	}

	public void setAction(Action action) {
		this.action = action;
	}

	public Long getAction_id() {
		return form_id;
	}

	public void setAction_id(Long action_id) {
		this.action_id = action_id;
	}

	public Integer getItemOrder() {
		return itemOrder;
	}

	public void setItemOrder(Integer itemOrder) {
		this.itemOrder = itemOrder;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}	 
}
