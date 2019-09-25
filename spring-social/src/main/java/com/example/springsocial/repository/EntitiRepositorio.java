package com.example.springsocial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.springsocial.model.Entiti;

@Repository
@Transactional
public interface EntitiRepositorio  <T> 
		extends CrudRepository<Entiti, Integer>, 
				PagingAndSortingRepository<Entiti, Integer>, 
				JpaSpecificationExecutor<Entiti>, 
				JpaRepository<Entiti, Integer>{}
