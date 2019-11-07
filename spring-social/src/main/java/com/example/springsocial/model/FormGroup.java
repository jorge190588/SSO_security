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
@Table(name = "form_group")
public class FormGroup {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="form_group_sequence")
    @SequenceGenerator(name="form_group_sequence", sequenceName="form_group_sequence", allocationSize=1)
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	private Integer itemOrder;
	
	private Boolean showInMenu;
	
	private Boolean isGroupOfPages;
	private String icon;
	
	private Date createdAt;
	@Column(nullable = true)
	private Date updatedAt;
	@Column(nullable = true)
	private Integer createdBy;
	@Column(nullable = true)
	private Integer updatedBy;
	
	@Column(name = "system_id")
    @JsonProperty("system_id")
    private Long system_id;
	
	@ManyToOne
    @JoinColumn(name="system_id", insertable=false, updatable=false)
    private System system;
	
	public Boolean getIsGroupOfPages() {
		return isGroupOfPages;
	}

	public void setIsGroupOfPages(Boolean isGroupOfPages) {
		this.isGroupOfPages = isGroupOfPages;
	}

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

	public Boolean getShowInMenu() {
		return showInMenu;
	}

	public void setShowInMenu(Boolean showInMenu) {
		this.showInMenu = showInMenu;
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
	
	public System getSystem() {
		return system;
	}
	
	public void setSystem(System system) {
		this.system = system;
	}
}
