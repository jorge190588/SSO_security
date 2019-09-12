package com.example.springsocial.controller;

import com.example.springsocial.error.CustomException;
import com.example.springsocial.error.ErrorCode;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.RolFormActionRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.tools.CrudValidations;
import com.example.springsocial.tools.RestResponse;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SuppressWarnings("rawtypes")
@RestController
public class UserController {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RolFormActionRepository rolFormActionRepository;    
    private RestResponse response=null;
        
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
   
    @SuppressWarnings({"unchecked"})
	@GetMapping("/user/view")
    @PreAuthorize("hasRole('USER')")
    public RestResponse userView(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI(),userPrincipal.getRol_id() )){
    		logger.info("user doesnt has access to "+request.getRequestURI());
    		response.setError(new CustomException("Usuario no encontrado",ErrorCode.REST_FIND, this.getClass().getSimpleName(),0));
    		return response;
    	}
    		
    	User user = userRepository.findById(userPrincipal.getId());
    	if (user!=null) response.setData(user);
    	else response.setError(new CustomException("Usuario no encontrado",ErrorCode.REST_FIND, this.getClass().getSimpleName(),0));    
        return response;
    }
}
