package com.example.springsocial.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.System;

@Repository
public interface SystemRepository extends CrudRepository<System, Integer>, 
					PagingAndSortingRepository<System, Integer>, 
						JpaSpecificationExecutor<System>, JpaRepository<System, Integer> {

	List<System> findAllById(ArrayList<Long> ids);   

}