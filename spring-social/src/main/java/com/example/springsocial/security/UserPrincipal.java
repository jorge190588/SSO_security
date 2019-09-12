package com.example.springsocial.security;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import com.example.springsocial.model.RolFormAction;
import com.example.springsocial.model.User;
import com.example.springsocial.tools.CrudValidations;
import com.example.springsocial.tools.RestResponse;

@SuppressWarnings({"serial","rawtypes"})
public class UserPrincipal implements OAuth2User, UserDetails {
    private Long id;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private Map<String, Object> attributes;
    private CrudValidations crud = null;
    private Optional<String> searchCriteria;
    private Optional<String> orderCriteria;
    private Long rol_id;
    
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
    
    private void instanceCrud(Object rolFormActionRepository) {
		if (crud==null) crud = new CrudValidations(rolFormActionRepository,"RolFormAction",null );
	}
    
    @SuppressWarnings({"unchecked"})
    public boolean hasPermissionToRoute(Object rolFormActionRepository, String uri) {
    	String 	[]parts =  uri.split("/");
    	String 	rolFilter ="{\"id\":\"rol_id\",\"option\":\"Igual\",\"value\":\""+ this.rol_id + "\"}",
    			formFilter = "{\"id\":\"formAction.form.path\",\"option\":\"Igual\",\"value\":\""+ parts[1] + "\"}",
        		actionFilter = "{\"id\":\"formAction.action.path\",\"option\":\"Igual\",\"value\":\""+ parts[2] + "\"}";
         
        searchCriteria =  Optional.of("[" + rolFilter +","+formFilter+"," + actionFilter +"]");
        orderCriteria =  Optional.empty();
        instanceCrud(rolFormActionRepository);
		RestResponse response= crud.findAll(searchCriteria, orderCriteria);
  		if (response.getError()!=null) return false;
  		List<RolFormAction> rolActionAcces =  (List<RolFormAction>) response.getData();
  		if (rolActionAcces.size()==0) return false;
        else return true;
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
