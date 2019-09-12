package com.example.springsocial.tools;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Order;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.data.jpa.domain.Specification;

@SuppressWarnings("serial")
public class JPAcustomSpecification<T> {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	public Specification<T> getSpecification(final JSONArray searchCriteriaArray, final JSONArray orderCriteriaArray) {
		return new Specification<T>() {
			@Override
			public Predicate toPredicate(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder builder) {  
				if (orderCriteriaArray!=null) {
					List<Order> orderList = getOrderList(orderCriteriaArray, root, builder);
					query.orderBy(orderList);	
				}
				if (searchCriteriaArray!=null) {
					List<Predicate> predicates = getPredicateList(root,builder, searchCriteriaArray);
	                return builder.and(predicates.toArray(new Predicate[predicates.size()]));	
				}else
					return null;
			}
		};
	}
    
    private List<Order> getOrderList(JSONArray orderCriteria, Root<T> root, CriteriaBuilder builder){
    	List<Order> orderList = new LinkedList<>();
    	JSONObject filterElement;
 		String attribute="",option="";
 		try {
			for(int index=0; index < orderCriteria.length(); index++) {
				
	        	filterElement = (JSONObject) orderCriteria.get(index);
	        	attribute = filterElement.get("id").toString();
				option = filterElement.get("option").toString();
				if (option.equals("asc"))
					orderList.add(builder.asc(root.get(attribute)));
				else 			 
					orderList.add(builder.desc(root.get(attribute)));
	        }	
		}catch(Exception ex) {
			logger.error(ex.toString());
		}
    	return orderList;
    }
    
  
    
    private List<Predicate> getPredicateList(Root<?> root, CriteriaBuilder criteriaBuilder, JSONArray searchCriteriaArray){
        List<Predicate> predicates = new ArrayList<>();
        JSONObject filterElement;
		String attribute="",option="",value="";
		
		try {
			for(int index=0; index < searchCriteriaArray.length(); index++) {
	        	filterElement = (JSONObject) searchCriteriaArray.get(index);
	        	attribute = filterElement.get("id").toString();
				option = filterElement.get("option").toString();
				value = filterElement.get("value").toString();
	        	predicates.add(getPredicate(root,criteriaBuilder,option,attribute,value));
	        }	
		}catch(Exception ex) {
			logger.error(ex.toString());
		}
        
        return predicates;
    }
    
    private Predicate getPredicate(Root<?> root, CriteriaBuilder criteriaBuilder,String option, String attribute, String value) {
    	Predicate predicate = null;
    	switch (option) {
        case "Igual":
        	predicate= criteriaBuilder.and(criteriaBuilder.equal(getAtribute(attribute, root, "String"), value));
            break;
        case "Contiene":
        	predicate=criteriaBuilder.and(criteriaBuilder.like((Expression<String>) getAtribute(attribute, root, "String"), "%"+value+"%"));
        	break;
        case "Inicia":
        	predicate=criteriaBuilder.and(criteriaBuilder.like((Expression<String>) getAtribute(attribute, root, "String"), "%"+value));
        	break;
        case "Finaliza":
        	predicate=criteriaBuilder.and(criteriaBuilder.like((Expression<String>) getAtribute(attribute, root, "String"), value+"%"));
        	break;
        case "Mayor":
        	predicate= criteriaBuilder.and(criteriaBuilder.greaterThan((Expression<Integer>) getAtribute(attribute, root, "Double"), Integer.valueOf(value) ));
        	break;
        case "MayorIgual":
        	predicate= criteriaBuilder.and(criteriaBuilder.greaterThanOrEqualTo((Expression<Integer>) getAtribute(attribute, root, "Double"), Integer.valueOf(value) ));
        	break;
        case "Menor":
        	predicate= criteriaBuilder.and(criteriaBuilder.lessThan((Expression<Integer>) getAtribute(attribute, root, "Double"), Integer.valueOf(value) ));
        	break;
        case "MenorIgual":
        	predicate= criteriaBuilder.and(criteriaBuilder.lessThanOrEqualTo((Expression<Integer>) getAtribute(attribute, root, "Double"), Integer.valueOf(value) ));
        	break;
        default:
        	predicate= criteriaBuilder.and(criteriaBuilder.equal(getAtribute(attribute, root, "String"), value));
            logger.error("Error: Invalid Option: "+option.toString());
            break;
	    }
    	return predicate;
    }
    
    private Expression<?> getAtribute(String attribute, Root<?> root, String type ) {
    	String[] parts = attribute.split("[.]");
    	if (parts.length==0) return root;
    	
    	if (type=="String") {
    		if  (parts.length==1) return root.<String>get(attribute);
    		else if (parts.length==2) return root.<String>get(parts[0]).get(parts[1]);
    		else if (parts.length==3) return root.<String>get(parts[0]).<String>get(parts[1]).<String>get(parts[2]);
    		else return root;
    	}if (type=="Integer") {
    		if  (parts.length==1) return root.<String>get(attribute);
    		else if (parts.length==2) return root.<String>get(parts[0]).get(parts[1]);
    		else if (parts.length==3) return root.<Integer>get(parts[0]).<Integer>get(parts[1]).<Integer>get(parts[2]);
    		else return root;
    	}else return root;
    }
}






















