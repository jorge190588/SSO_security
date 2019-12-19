let searchCriteria =[];
let operator="or";
let setOperator=(value)=>{
    operator=value;
}
let clear=()=>{ searchCriteria=[] };
let set=(value)=>{    searchCriteria= value;  }
let get=()=>{         return searchCriteria;  }

let add=(id,option,value)=>{  searchCriteria.push({'id':id,'option':option,'value':value,'operator':operator});   }
let addEquals=(id,value)=>{    add(id,"Igual",value);    }
let addContains=(id,value)=>{    add(id,"Contiene",value);    }

const methodList = {"set": set, "get":get, "add":add, "addEquals":addEquals, "addContains": addContains, "clear":clear, "setOperator":setOperator}

export default methodList;
