package com.example.springsocial.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.Company;

@Repository
public interface CompanyRepository extends CrudRepository<Company, Integer>, 
										PagingAndSortingRepository<Company, Integer>, 
										JpaSpecificationExecutor<Company>, JpaRepository<Company, Integer> {

	List<Company> findAllById(ArrayList<Long> ids);   

}
