const setValuesToElements = (elements, data)=>{
    Object.keys(data).forEach(key =>   {
        if(elements[key]!==undefined)   elements[key].value=data[key] ;
    })
    return elements;
}

const cleanValuesToElements= (elements)=>{
    Object.keys(elements).map(key => (elements[key].elementType!=='checkbox') ? elements[key].value='' : elements[key].value=false);
    return elements;
}

const setErrorsToElements = (newData,elements)=>{   
    newData.error.messageList.forEach(function(entry) {
        elements[entry.attribute].errorMessages=entry.message;
        elements[entry.attribute].isError=true;
    });
    return elements;
}

const JSTools = {setValuesToElements, cleanValuesToElements,setErrorsToElements};

export default JSTools;