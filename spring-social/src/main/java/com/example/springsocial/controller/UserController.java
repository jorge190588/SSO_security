package com.example.springsocial.controller;

import com.example.springsocial.error.CustomException;
import com.example.springsocial.error.ErrorCode;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.FormRepository;
import com.example.springsocial.repository.RolFormActionRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.tools.RestResponse;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SuppressWarnings({"unchecked","rawtypes"})
@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RolFormActionRepository rolFormActionRepository;
    @Autowired
    private FormRepository formRepository;
    private RestResponse response=null;
        
    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public User me(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request) {
    	User user;
    	try {
    		user = userRepository.findById(userPrincipal.getId());
    	}catch(Exception ex) {
    		throw new ResourceNotFoundException("User", "id", userPrincipal.getId());
    	}
        return user;
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
    public RestResponse list(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    		
    	response.setData(true);
    	return response;
    }
    
	@GetMapping("/menu")
    @PreAuthorize("hasRole('USER')")
    public RestResponse menu(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request) {
    	return userPrincipal.menu(formRepository);
    }
}
