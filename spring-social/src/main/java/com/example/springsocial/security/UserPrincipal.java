package com.example.springsocial.security;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import com.example.springsocial.model.RolFormAction;
import com.example.springsocial.model.User;
import com.example.springsocial.tools.CrudValidations;
import com.example.springsocial.tools.RestResponse;

@SuppressWarnings({"serial","rawtypes","unchecked"})
public class UserPrincipal implements OAuth2User, UserDetails {
    private Long id;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private Map<String, Object> attributes;
    private CrudValidations crudForm = null;
    private CrudValidations crudRolFormAction=null;
    private Optional<String> searchCriteria;
    private Optional<String> orderCriteria;
    private Long rol_id;
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    
    public UserPrincipal(Long id, String email, String password, Collection<? extends GrantedAuthority> authorities, Long rol_id) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
        this.rol_id= rol_id;
    }

    public static UserPrincipal create(User user) {
        List<GrantedAuthority> authorities = Collections.
                singletonList(new SimpleGrantedAuthority("ROLE_USER"));

        return new UserPrincipal(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                authorities,
                user.getRol_id()
        );
    }

    public static UserPrincipal create(User user, Map<String, Object> attributes) {
        UserPrincipal userPrincipal = UserPrincipal.create(user);
        userPrincipal.setAttributes(attributes);
        return userPrincipal;
    }
    
    private void instanceCrudForm(Object formRepository) {
		if (crudForm==null) crudForm= new CrudValidations(formRepository,"Form",null );
	}
    
    private void instanceCrudRolFormAction(Object rolFormActionRepository) {
		if (crudRolFormAction==null) crudRolFormAction= new CrudValidations(rolFormActionRepository,"RolFormAction",null );
	}
    
    public boolean hasPermissionToRoute(Object rolFormActionRepository, String uri) {
    	String 	[]parts =  uri.split("/");
    	return hasPermissionToRouteValidation(rolFormActionRepository, parts[1], parts[2]);
    }
    
    public boolean hasPermissionToRoute(Object rolFormActionRepository, String form, String action) {
    	return hasPermissionToRouteValidation(rolFormActionRepository, form, action);
    }
    
    private boolean hasPermissionToRouteValidation(Object rolFormActionRepository, String form, String action) {
    	String 	rolFilter ="{\"id\":\"rol_id\",\"option\":\"Igual\",\"value\":\""+ this.rol_id + "\"}",
    			formFilter = "{\"id\":\"formAction.form.path\",\"option\":\"Igual\",\"value\":\"/"+ form + "\"}",
        		actionFilter = "{\"id\":\"formAction.action.path\",\"option\":\"Igual\",\"value\":\""+ action + "\"}";
         
        searchCriteria =  Optional.of("[" + rolFilter +","+formFilter+"," + actionFilter +"]");
        orderCriteria =  Optional.empty();
        instanceCrudRolFormAction(rolFormActionRepository);
		RestResponse response= crudRolFormAction.findAll(searchCriteria, orderCriteria);
  		
		if (response.getError()!=null) {
			logger.info("Access not authorized (error) "+searchCriteria);
			return false;
		}
  		
  		List<RolFormAction> rolActionAcces =  (List<RolFormAction>) response.getData();
  		if (rolActionAcces.size()==0) {
  			logger.info("Access not authorized (Denied) "+searchCriteria);
  			return false;
  		}else return true;
    }
    
	public RestResponse menu(Object formRepository) {
    	String 	rolFilter ="{\"id\":\"rol_id\",\"option\":\"Igual\",\"value\":\""+ this.rol_id + "\"}";
    	searchCriteria =  Optional.of("[" + rolFilter +"]");
        orderCriteria =  Optional.empty();
        instanceCrudForm(formRepository);
 		return crudForm.custom("findFormByRolIdParamsNative", this.rol_id);
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    @Override
    public String getName() {
        return String.valueOf(id);
    }

	public Long getRol_id() {
		return rol_id;
	}

	public void setRol_id(Long rol_id) {
		this.rol_id = rol_id;
	}
}
