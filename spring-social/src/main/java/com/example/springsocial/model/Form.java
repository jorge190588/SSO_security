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
@Table(name = "form")
public class Form {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="form_sequence")
    @SequenceGenerator(name="form_sequence", sequenceName="form_sequence", allocationSize=1)
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(name = "formGroup_id")
    @JsonProperty("formGroup_id")
    private Long formGroup_id;
	
	@ManyToOne
    @JoinColumn(name="formGroup_id", insertable=false, updatable=false)
    private FormGroup formGroup; 

	@Column(name = "system_id")
    @JsonProperty("system_id")
    private Long system_id;
	
	@ManyToOne
    @JoinColumn(name="system_id", insertable=false, updatable=false)
    private System system;
	
    private String path;
    private String mobileScreen;
    private Boolean showInMenu;
    private String icon;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public FormGroup getFormGroup() {
		return formGroup;
	}
	
	public void setFormGroup(FormGroup formGroup) {
		this.formGroup = formGroup;
	}
	
	public Long getFormGroup_id() {
		return formGroup_id;
	}
	
	public void setFormGroup_id(Long formGroup_id) {
		this.formGroup_id = formGroup_id;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
	
	public Boolean getShowInMenu() {
		return showInMenu;
	}

	public void setShowInMenu(Boolean showInMenu) {
		this.showInMenu = showInMenu;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
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

	public String getMobileScreen() {
		return mobileScreen;
	}

	public void setMobileScreen(String mobileScreen) {
		this.mobileScreen = mobileScreen;
	}
	
	public System getSystem() {
		return system;
	}
	
	public void setSystem(System system) {
		this.system = system;
	}
}
