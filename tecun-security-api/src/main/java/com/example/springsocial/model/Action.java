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
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "action", uniqueConstraints = {
        @UniqueConstraint(columnNames = "name")
})
public class Action {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="action_sequence")
    @SequenceGenerator(name="action_sequence", sequenceName="action_sequence", allocationSize=1)
	private Long id;
	@Column(nullable = false)
	private String name;	
	private String path;
	private Date createdAt;
	@Column(nullable = true)
	private Date updatedAt;
	@Column(nullable = true)
	private Integer createdBy;
	@Column(nullable = true)
	private Integer updatedBy;
	
	public Long getMethod_id() {
		return method_id;
	}

	public void setMethod_id(Long method_id) {
		this.method_id = method_id;
	}

	public Method getMethod() {
		return method;
	}

	public void setMethod(Method method) {
		this.method = method;
	}

	@Column(name = "method_id")
    @JsonProperty("method_id")
    private Long method_id;
	
	@ManyToOne
    @JoinColumn(name="method_id", insertable=false, updatable=false)
    private Method method; 
    
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

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
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
