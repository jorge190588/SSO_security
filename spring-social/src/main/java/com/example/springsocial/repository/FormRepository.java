package com.example.springsocial.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.Form;

@Repository
public interface FormRepository extends CrudRepository<Form, Integer>, 
										PagingAndSortingRepository<Form, Integer>, 
										JpaSpecificationExecutor<Form>, JpaRepository<Form, Integer>{

	@Query(value = "select distinct f.* " + 
			"from form f " + 
			"inner join system s on f.system_id=s.id " +
			"inner join form_action fa on f.id= fa.form_id " + 
			"inner join action a on a.id=fa.action_id " + 
			"inner join rol_form_action rfa on fa.id=rfa.form_action_id " + 
			"where  rfa.rol_id = :rol_id and s.name= :system_name", nativeQuery = true)
	List<Form> findFormByRolIdParamsNative(@Param("rol_id") Object rol_id, @Param("system_name") String system_name);
	List<Form> findAllById(ArrayList<Long> ids);
	List<Form> findAllBySystemId(Long system_id);
}
