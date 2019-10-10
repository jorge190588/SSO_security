package com.example.springsocial.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.springsocial.error.CustomException;
import com.example.springsocial.error.ErrorCode;
import com.example.springsocial.model.Form;
import com.example.springsocial.model.FormAction;
import com.example.springsocial.model.RolFormAction;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.ElementRepositorio;
import com.example.springsocial.repository.RolFormActionRepository;
import com.example.springsocial.repository.FormRepository;
import com.example.springsocial.repository.FormActionRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.tools.CrudValidations;
import com.example.springsocial.tools.RestResponse;

@SuppressWarnings({"unchecked","rawtypes","unused"})
@RestController
@RequestMapping("form")
public class FormController {
    @Autowired
    private FormRepository repository;
    @Autowired
    private RolFormActionRepository rolFormActionRepository;
    @Autowired
	ElementRepositorio elementRepository;
    @Autowired
	FormActionRepository formActionRepository;
    
    private RestResponse response=null;
	private CrudValidations crud = null;
	private String moduleName="rol";
	private Optional<String> searchCriteria;
    private Optional<String> orderCriteria;
    
	private void instanceCrud() {
		if (crud==null) crud = new CrudValidations(repository,moduleName,elementRepository );
	}

	@GetMapping("/view")
    @PreAuthorize("hasRole('USER')")
    public RestResponse view(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    		
    	response.setData(true);
    	return response;
    }
	
	@GetMapping("/list")
    @PreAuthorize("hasRole('USER')")
    public RestResponse list(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request, @RequestParam("searchCriteria") Optional<String> searchCriteria,@RequestParam Optional<String> orderCriteria) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    		
    	instanceCrud(); 
		return crud.findAll(searchCriteria, orderCriteria);
    }
	
	@PutMapping("update")
	public RestResponse update(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request,@RequestBody Form updateElement) {
		response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    		
    	instanceCrud(); 
		return crud.update(updateElement);
	}
	
	@PostMapping("/create")
    @PreAuthorize("hasRole('USER')")
    public RestResponse create(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request,@RequestBody Form createElement) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    	//createElement.setCreatedBy(userPrincipal.getId());
    	instanceCrud();
    	return crud.create(createElement);
    }
	
	@DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('USER')")
    public RestResponse delete(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request,@PathVariable Long id) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    	
    	List<FormAction> formActionList = formActionRepository.findAllByFormId(id);
    	List<RolFormAction> rolFormActionList = rolFormActionRepository.findAllByFormAction(formActionList);
    	
    	if (rolFormActionList.size()>0) {
    		response.setError(new CustomException("El formulario esta asociado a un rol",ErrorCode.REST_DELETE, this.getClass().getSimpleName(),0));
    		return response;
    	}
    	
    	formActionRepository.deleteInBatch(formActionList);
    	
    	instanceCrud();
    	return crud.delete(id);
    }

}
