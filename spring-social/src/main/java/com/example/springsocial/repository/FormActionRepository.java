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

	@Query(value = "select id,action_id,form_id,item_order,1 'is_the_rol',created_at,updated_at,created_by,updated_by "+
	" from form_action fa "+
	" where fa.id in (select rfa.form_action_id from rol_form_action rfa where rfa.rol_id = :rol_id)" +
	" union all " +
	" select id,action_id,form_id,item_order,0 'is_the_rol',created_at,updated_at,created_by,updated_by " +
	" from form_action fa  " +
	" where fa.id not in (select rfa.form_action_id from rol_form_action rfa where rfa.rol_id = :rol_id)  " , nativeQuery = true)
	List<FormAction> findFormActionByRolIdNotInRolFormActionParamsNative(@Param("rol_id") int rol_id);
}