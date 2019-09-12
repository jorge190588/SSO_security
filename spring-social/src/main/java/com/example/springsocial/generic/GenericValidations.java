package com.example.springsocial.generic;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.example.springsocial.tools.DateTools;
import org.apache.commons.beanutils.PropertyUtils;
import com.example.springsocial.error.CustomException;
import com.example.springsocial.error.ErrorCode;
import com.example.springsocial.error.ErrorMessage;
import com.example.springsocial.tools.CrudValidations;
import com.example.springsocial.tools.RestResponse;

@SuppressWarnings({"rawtypes","unchecked"})
public class GenericValidations<T> {
	private String moduleName;
	private DateTools dateTools = new DateTools();
	private Object elementRepository;
	private CrudValidations elementCrud = null;
	private GenericClass genericClass;
	
	public GenericValidations(String _moduleName, Object _elementRepository){
		this.moduleName=_moduleName;
		this.elementRepository=_elementRepository;
	}
	
	private void instanceCrud() {
		if (elementCrud==null) elementCrud = new CrudValidations(elementRepository,moduleName,elementRepository);
	}
	
	
	private String capitalizeString(String param){
		if (param.length()==0) return "";
		return param.substring(0, 1).toUpperCase() + param.substring(1);
	}
	
	
	public void checkIfParamIsNull(T param,String name) throws CustomException{
		if (param==null)
			throw new CustomException(name+" es nulo",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
	}
	
	public void setParametersValuesToElement(Object findedElement, Object _paramsClass) throws CustomException, IllegalAccessException, InvocationTargetException, NoSuchMethodException{
		String paramName="",methodName;
		Object paramValue;
		GenericClass genericClass;
		
			for(Field param: _paramsClass.getClass().getDeclaredFields()){
				
				paramName=param.getName();
				if (!paramName.equals("format")){
					methodName="get"+capitalizeString(paramName);
					genericClass= new GenericClass(_paramsClass,methodName);
					genericClass.executeMethod();
					if (genericClass.getIsError()==true)
						throw new CustomException("Error en la asignación de datos para crear un elemento",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
						
					paramValue = genericClass.getResult();
					
					if (paramName.equals("createdAt") || paramName.equals("id")){
						System.out.println("param name (ommit): "+paramName+", value "+paramValue);
					}else{
						PropertyUtils.setProperty(findedElement, paramName, paramValue);
					}
				}
				
				
			}
	}
	

	public void setUpdatedAtInElement(Object _class) throws CustomException{
		String setMethodName="setUpdatedAt",getMethodName="getUpdatedAt";
		GenericClass genericClass= new GenericClass(_class,getMethodName);
		genericClass.executeMethod();
		if (genericClass.getIsError()==true)
			throw new CustomException("Error al asignar la fecha de modificación",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
		
		Object beforeDate= genericClass.getResult();

		// set new data in updatedAt attribute
		genericClass = new GenericClass(_class,setMethodName,(T) dateTools.get_CurrentDate());
		genericClass.executeMethod();
		if (genericClass.getIsError()==true)
			throw new CustomException("Error al asignar la fecha de modificación",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
		
		// get updatedAt attribute
		genericClass =new GenericClass(_class,getMethodName);
		genericClass.executeMethod();
		if (genericClass.getIsError()==true)
			throw new CustomException("Error al asignar la fecha de modificación",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
		
		Object result= genericClass.getResult();
		if (result==null)
			throw new CustomException("Error al asignar la fecha de modificación",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
		
		if (result==beforeDate)
			throw new CustomException("La fecha de actualizacion actual y anterior son las mismas",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
			
	}
	
	public void setCreatedAtInElement(Object _class) throws CustomException{
		String setMethodName="setCreatedAt",getMethodName="getCreatedAt";
		
		genericClass= new GenericClass(_class,setMethodName,(T) dateTools.get_CurrentDate());
		genericClass.executeMethod();
		if (genericClass.getIsError()==true)
			throw new CustomException("Error al asignar la fecha de creación",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
		
		genericClass= new GenericClass(_class,getMethodName);
		genericClass.executeMethod();
		if (genericClass.getIsError()==true)
			throw new CustomException("Error al asignar la fecha de creación",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
		
		
		if (genericClass.getResult()==null)	
			throw new CustomException("Error al asignar la fecha de creación",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);
		
	}
	
	public void checkIfListHasElements(List<T> list) throws CustomException{
		if (list.size()==0)	throw new CustomException("Requiere un elemento",ErrorCode.REST_CREATE, this.getClass().getSimpleName().toString() , null);			
	}
	
	
		
}
