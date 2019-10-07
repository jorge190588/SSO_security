package com.example.springsocial.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.RolFormAction;

@Repository
public interface RolFormActionRepository extends 	CrudRepository<RolFormAction, Integer>, 
													PagingAndSortingRepository<RolFormAction, Integer>, 
													JpaSpecificationExecutor<RolFormAction>, JpaRepository<RolFormAction, Integer>
{
    List<RolFormAction> findByRolAndFormAction(Integer rol, Integer formAction);
    Boolean existsByRolAndFormAction(Integer rol, Integer formAction);
}
