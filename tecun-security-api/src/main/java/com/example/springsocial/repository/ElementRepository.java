package com.example.springsocial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.springsocial.model.Element;

@Repository
@Transactional
public interface ElementRepository <T> 
	extends CrudRepository<Element, Integer>, 
			PagingAndSortingRepository<Element, Integer>, 
			JpaSpecificationExecutor<Element>, 
			JpaRepository<Element, Integer>{}
