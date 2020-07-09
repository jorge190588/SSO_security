const setValuesToElements = (elements, data)=>{
    Object.keys(data).forEach(key =>   {
        if(elements[key]!==undefined){
            if (elements[key].elementType!=='date'){
                elements[key].value=data[key] ;
            }else{
                elements[key].value=new Date(data[key]);
            }
            elements[key].isError=false;
        }   
    })
    return elements;
}

const cleanValuesToElements= (elements)=>{
    for(var key in elements){
        switch(elements[key].elementType) {
            case "checkbox": 
                elements[key].value=false;
                break;
            case "hidden":
                //Nothing
                break;
            case "date":
                elements[key].value=new Date();
                break;
            default:
                elements[key].value='';
                break;
        }
    }
    return elements;
}

const setErrorsToElements = (newData,elements)=>{   
    newData.error.messageList.forEach(function(entry) {
        elements[entry.attribute].errorMessages=entry.message;
        elements[entry.attribute].isError=true;
    });
    return elements;
}

const setCurrentDateToElement=(elements,element)=>{
    elements[element].value=new Date();
}
const JSTools = {setValuesToElements, cleanValuesToElements,setErrorsToElements, setCurrentDateToElement};

export default JSTools;