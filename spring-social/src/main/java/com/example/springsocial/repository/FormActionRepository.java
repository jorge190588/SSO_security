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
import com.example.springsocial.model.FormAction;

@Repository
public interface FormActionRepository  extends CrudRepository<FormAction, Integer>, 
												PagingAndSortingRepository<FormAction, Integer>, 
												JpaSpecificationExecutor<FormAction>, JpaRepository<FormAction, Integer> {
	@Query(value = "select	fa.id, fa.form_id, fa.action_id, fa.item_order, " + 
			"		case when (select count(*) from rol_form_action rfa where rfa.form_action_id=fa.id and rfa.rol_id= :rol_id )>0 then 1 else 0 end is_the_rol, " + 
			"		f.name form, fg.name formGroup, a.name action, fa.id form_action_id, :rol_id rol_id, f.path formPath, a.path actionPath,s.name " + 
			"from form_action fa " + 
			"inner join form f on fa.form_id=f.id " +
			"inner join system s on f.system_id=s.id "+
			"inner join form_group fg on f.form_group_id=fg.id " + 
			"inner join action a on fa.action_id=a.id", nativeQuery = true)
	List<Object[]> listByRolIdNotInRolFormAction(@Param("rol_id") Long rol_id);
	List<FormAction> findAllById(ArrayList<Long> ids);
	List<FormAction> findAllByFormId(ArrayList<Long> ids);
	List<FormAction> findAllByFormId(Long ids);
}