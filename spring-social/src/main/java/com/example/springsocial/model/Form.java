package com.example.springsocial.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "form", uniqueConstraints = {
        @UniqueConstraint(columnNames = "name")
})
public class Form {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(name = "formGroup_id")
    @JsonProperty("formGroup_id")
    private Long formGroup_id;
	
	@ManyToOne
    @JoinColumn(name="formGroup_id", insertable=false, updatable=false)
    private FormGroup formGroup; 
        
    private String path;
    
    private Boolean showInMenu;
    
    private String icon;
    
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
}
