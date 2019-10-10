package com.example.springsocial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.FormGroup;

@Repository
public interface  FormGroupRepository  extends 	CrudRepository<FormGroup, Integer>, 
												PagingAndSortingRepository<FormGroup, Integer>, 
												JpaSpecificationExecutor<FormGroup>, JpaRepository<FormGroup, Integer>{

}
