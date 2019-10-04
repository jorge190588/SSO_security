package com.example.springsocial.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.FormAction;

@Repository
public interface FormActionRepository  extends CrudRepository<FormAction, Integer>, 
												PagingAndSortingRepository<FormAction, Integer>, 
												JpaSpecificationExecutor<FormAction>, JpaRepository<FormAction, Integer> {

	@Query(value = "select fa.id, fa.form_id, fa.action_id, fa.item_order,(select count(*) from rol_form_action rfa where rfa.form_action_id=fa.id) [is_the_rol],created_at,updated_at,created_by,updated_by "+
	" from form_action fa ", nativeQuery = true)
	//@Query(value = "select *,(select count(*) from rol_form_action rfa where rfa.form_action_id=fa.id) 'is_the_rol' from form_action fa",nativeQuery=true)
	List<FormAction> listByRolIdNotInRolFormAction(@Param("rol_id") int rol_id);
}