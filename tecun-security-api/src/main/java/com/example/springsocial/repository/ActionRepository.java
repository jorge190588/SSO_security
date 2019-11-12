package com.example.springsocial.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.Action;

@Repository
public interface ActionRepository extends CrudRepository<Action, Integer>, 
PagingAndSortingRepository<Action, Integer>, 
JpaSpecificationExecutor<Action>, JpaRepository<Action, Integer> {
	  List<Action> findAllById(ArrayList<Long> ids);	
}
