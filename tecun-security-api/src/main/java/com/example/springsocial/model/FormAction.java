package com.example.springsocial.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "form_action")
public class FormAction {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="form_action_sequence")
    @SequenceGenerator(name="form_action_sequence", sequenceName="form_action_sequence", allocationSize=1)
	private Long id;
	
	@ManyToOne
    @JoinColumn(name="form_id", referencedColumnName="id", insertable=false, updatable=false)
    private Form form; 
    
	@Column(name = "form_id")
    @JsonProperty("form_id")
    private Long form_id;
	
	@ManyToOne
    @JoinColumn(name="action_id", referencedColumnName="id", insertable=false, updatable=false)
    private Action action; 
    
	@Column(name = "action_id")
    @JsonProperty("action_id")
    private Long action_id;
	
	private Integer itemOrder;
	
	@Column(name = "is_the_rol", insertable=false, updatable=false)
	@org.hibernate.annotations.ColumnDefault("0")
	private boolean  isTheRol;
	
	private Date createdAt;
	@Column(nullable = true)
	private Date updatedAt;
	@Column(nullable = true)
	private Integer createdBy;
	@Column(nullable = true)
	private Integer updatedBy;
	
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
		return action_id;
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
	
	public boolean getIsTheRol() {
		return isTheRol ;
	}	
	
	public void setIsTheRol(boolean isTheRol) {
		this.isTheRol =isTheRol;
	}
	
	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Integer getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}

	public Integer getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(Integer updatedBy) {
		this.updatedBy = updatedBy;
	}
}
