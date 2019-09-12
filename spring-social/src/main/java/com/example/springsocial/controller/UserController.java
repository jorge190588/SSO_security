package com.example.springsocial.controller;

import com.example.springsocial.error.CustomException;
import com.example.springsocial.error.ErrorCode;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.model.RolFormAction;
import com.example.springsocial.repository.RolFormActionRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.tools.CrudValidations;
import com.example.springsocial.tools.RestResponse;
import java.util.List;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	 
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RolFormActionRepository rolFormActionRepository;
    
    private CrudValidations crud = null;
    
    private void instanceCrud() {
		if (crud==null) crud = new CrudValidations(rolFormActionRepository,"RolFormAction",null );
	}
    private Optional<String> searchCriteria;
    private Optional<String> orderCriteria;
    
    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request) {
    	User user;
    	try {
    		user = userRepository.findById(userPrincipal.getId());
    	}catch(Exception ex) {
    		throw new ResourceNotFoundException("User", "id", userPrincipal.getId());
    	}
        return user;
    }
   
    @SuppressWarnings({"rawtypes","unchecked"})
	@GetMapping("/user/view")
    @PreAuthorize("hasRole('USER')")
    public RestResponse userView(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request) {
        String uri = request.getRequestURI();
        logger.info(uri);
        String []parts =  uri.split("/");
        logger.info(parts.toString());
        User user  =null;
        RestResponse response=null;
        CustomException exception =null;
        
        String rolFilter ="{\"id\":\"rol_id\",\"option\":\"Igual\",\"value\":\""+ user.getRol_id() + "\"}";
        String formFilter = "{\"id\":\"formAction.form.path\",\"option\":\"Igual\",\"value\":\""+ parts[1] + "\"}";
        String actionFilter = "{\"id\":\"formAction.action.path\",\"option\":\"Igual\",\"value\":\""+ parts[2] + "\"}";
        
        searchCriteria =  Optional.of("[" + rolFilter +","+formFilter+"," + actionFilter +"]");
        orderCriteria =  Optional.empty();
        
        instanceCrud();
       
		response = crud.findAll(searchCriteria, orderCriteria);
		if (response.getError()!=null) return response;
		
		List<RolFormAction> rolActionAcces =  (List<RolFormAction>) response.getData();
        if (rolActionAcces.size()==0) {
        	response.setData(null);
        	exception = new CustomException("Sin permiso para esta accion",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0);
        	response.setError(exception);
        	return response;
        }

        user  = userRepository.findById(userPrincipal.getId());
    	if (user!=null) {
    		response.setData(user);
    		response.setError(null);
    	}else {
    		exception = new CustomException("Usuario no encontrado",ErrorCode.REST_FIND, this.getClass().getSimpleName(),0);
    		response.setData(null);
    		response.setError(exception);
    	}
        
        return response;
    }
}
