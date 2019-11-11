package com.example.springsocial.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.Method;

@Repository
public interface MethodRepository extends CrudRepository<Method, Integer>, 
PagingAndSortingRepository<Method, Integer>, 
JpaSpecificationExecutor<Method>, JpaRepository<Method, Integer> {
	  List<Method> findAllById(ArrayList<Long> ids);	
}
