export default class OrderCriteria{
    constructor(){
        this.data=[];
    }
    clear (){             this.data=[] };
    set(value){          this.data= value;  }
    get(){               return this.data;  }
    add(id,option){      this.data.push({'id':id,'option':option});   }
    addAsc(id){          this.add(id,"asc");    }
    addDesc(id){         this.add(id,"desc");    }
}