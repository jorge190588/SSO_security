package com.example.springsocial.controller;

import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.springsocial.error.CustomException;
import com.example.springsocial.error.ErrorCode;
import com.example.springsocial.repository.ElementRepositorio;
import com.example.springsocial.repository.RolFormActionRepository;
import com.example.springsocial.repository.RolRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.tools.CrudValidations;
import com.example.springsocial.tools.RestResponse;

@SuppressWarnings({"unchecked","rawtypes"})
@RestController
@RequestMapping("rol")
public class RolController {
    @Autowired
    private RolRepository repository;
    @Autowired
    private RolFormActionRepository rolFormActionRepository;
    @Autowired
	ElementRepositorio elementRepository;
    private RestResponse response=null;
	private CrudValidations crud = null;
	private String moduleName="Deporte";
	
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
	
}