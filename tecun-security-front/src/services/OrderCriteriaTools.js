let orderCriteria =[];

let clear=()=>{ orderCriteria=[] };
let set=(value)=>{    orderCriteria= value;  }
let get=()=>{         return orderCriteria;  }
let add=(id,option)=>{  orderCriteria.push({'id':id,'option':option});   }
let addAsc=(id)=>{    add(id,"asc");    }
let addDesc=(id)=>{    add(id,"desc");    }

const methodList = {"set": set, "get":get, "add":add, "addAsc":addAsc, "addDesc": addDesc, "clear":clear}

export default methodList;
