package com.example.springsocial.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import com.example.springsocial.model.RolFormAction;
import com.example.springsocial.repository.RolFormActionRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.tools.CrudValidations;
import com.example.springsocial.tools.RestResponse;

@SuppressWarnings({"rawtypes","unchecked"})
@RestController
@RequestMapping("rolFormAction")
public class RolFormActionController {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	CrudValidations crud = null;
	private String moduleName="RolFormAction";

	@Autowired
    private RolFormActionRepository rolFormActionRepository;
	
	@Autowired
    private RolFormActionRepository repository;
    
	private RestResponse response=null;
	
    private void instanceCrud() {
		if (crud==null) crud = new CrudValidations(repository,moduleName,null );
	}
	
	@PostMapping("/create")
	@PreAuthorize("hasRole('USER')")
	public RestResponse create(@RequestBody RolFormAction newElement) {
		logger.info("access to: POST /"+moduleName+"/"+newElement);
		instanceCrud();
		return crud.create(newElement);
	}
	
	@DeleteMapping("/delete/{id}")
	public RestResponse delete(@PathVariable Integer id) {
		logger.info("access to: DELETE /"+moduleName+"/"+id);
		instanceCrud();
		return crud.delete(id.toString());
	}
	
	@PutMapping("/{id}")
	public RestResponse update(@RequestBody RolFormAction updateElement) {
		logger.info("access to: PUT /"+moduleName+"/"+updateElement.getId());
		instanceCrud();
		return crud.update(updateElement);
	}
	
	@GetMapping("/{id}")
	public RestResponse  finbyid(@PathVariable int id) {
		logger.info("access to: GET /"+moduleName+"/"+id);
		instanceCrud(); 
		return crud.findById(id);
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
	
	@GetMapping("/{page}/{rows}")
	public  RestResponse  page(	@PathVariable int page,@PathVariable int rows,
			@RequestParam("searchCriteria") Optional<String> searchCriteria,@RequestParam Optional<String> orderCriteria) {
		logger.info("access to: GET /"+moduleName+"/page/"+page+"/"+rows+"?searchCriteria="+searchCriteria+"&orderCriteria="+orderCriteria);
		instanceCrud(); 
		return crud.getPage(searchCriteria, orderCriteria, page, rows);
	}
}
