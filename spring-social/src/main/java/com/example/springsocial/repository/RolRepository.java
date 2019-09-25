package com.example.springsocial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.Rol;

@Repository
public interface RolRepository extends CrudRepository<Rol, Integer>, 
										PagingAndSortingRepository<Rol, Integer>, 
										JpaSpecificationExecutor<Rol>, JpaRepository<Rol, Integer> {

   

}