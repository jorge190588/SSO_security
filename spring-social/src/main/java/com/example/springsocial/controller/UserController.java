package com.example.springsocial.controller;

import com.example.springsocial.repository.ElementRepositorio;
import com.example.springsocial.tools.CrudValidations;
import com.example.springsocial.error.CustomException;
import com.example.springsocial.error.ErrorCode;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.AuthProvider;
import com.example.springsocial.model.User;
import com.example.springsocial.payload.UserHasPermission;
import com.example.springsocial.repository.FormRepository;
import com.example.springsocial.repository.RolFormActionRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.tools.RestResponse;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SuppressWarnings({"unchecked","rawtypes"})
@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserRepository repository;
    @Autowired
    private RolFormActionRepository rolFormActionRepository;
    @Autowired
    private FormRepository formRepository;
    @Autowired
	ElementRepositorio elementRepository;
    private RestResponse response=null;
	private CrudValidations crud = null;
	private String moduleName="Users";
    @Autowired
    private PasswordEncoder passwordEncoder;
    
	private void instanceCrud() {
		if (crud==null) crud = new CrudValidations(repository,moduleName,elementRepository );
	}
	
    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public User me(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request) {
    	User user;
    	try {
    		user = repository.findById(userPrincipal.getId());
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
    public RestResponse list(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request, @RequestParam("searchCriteria") Optional<String> searchCriteria,@RequestParam Optional<String> orderCriteria) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    		
    	instanceCrud(); 
		return crud.findAll(searchCriteria, orderCriteria);

    }
    
	@PostMapping("/create")
    @PreAuthorize("hasRole('USER')")
    public RestResponse create(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request,@RequestBody User user) {
		user.setPassword(user.getPassword());
		user.setProvider(AuthProvider.local);
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setIsCancel(false);
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    	instanceCrud();
    	return crud.create(user);
    }
	
	
	@PutMapping("update")
    @PreAuthorize("hasRole('USER')")
    public RestResponse upudate(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request,@RequestBody User updateElement) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    	User findedElement = repository.findById(updateElement.getId());
    	
    	updateElement.setPassword(findedElement.getPassword());
    	updateElement.setEmail(findedElement.getEmail());
    	updateElement.setEmailVerified(findedElement.getEmailVerified());
    	updateElement.setProvider(findedElement.getProvider());
    	updateElement.setCreatedAt(findedElement.getCreatedAt());
    	updateElement.setIsCancel(findedElement.getIsCancel());
    	
    	instanceCrud();
    	return crud.update(updateElement);
    }
	
	
	@PutMapping("/cancel/{id}")
    @PreAuthorize("hasRole('USER')")
    public RestResponse cancel(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request, @PathVariable Long id) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository,request.getRequestURI() )){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    	User findedElement = repository.findById(id);
    	
    	if (findedElement.getIsCancel()) {
    		response.setError(new CustomException("Usuario esta cancelado",ErrorCode.REST_UPDATE, this.getClass().getSimpleName(),0));
    		return response;	
    	}
    	
    	findedElement.setIsCancel(true);
    	instanceCrud();
    	return crud.update(findedElement);
    }
	
	
	@GetMapping("/menu")
    @PreAuthorize("hasRole('USER')")
    public RestResponse menu(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request) {
    	return userPrincipal.menu(formRepository);
    }
	
	
	@PostMapping("/haspermission")
    @PreAuthorize("hasRole('USER')")
    public RestResponse hasPermission(@CurrentUser UserPrincipal userPrincipal, HttpServletRequest request,@RequestBody UserHasPermission userHasPermission ) {
    	response= new RestResponse();
    	if (!userPrincipal.hasPermissionToRoute(rolFormActionRepository, userHasPermission.getForm(), userHasPermission.getAction())){
    		response.setError(new CustomException("Acceso no autorizado",ErrorCode.ACCESS_DENIED, this.getClass().getSimpleName(),0));
    		return response;
    	}
    		
    	response.setData(true);
    	return response;
    }
}
