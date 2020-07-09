export default class SearchCriteriaClass {
    constructor(){
        this.data =[];
        this.operator="or";
    }
    setOperator(value){      this.operator=value;}
    clear(){                 this.data=[] };
    set(value){              this.data= value;  }
    get(){                   return this.data;  }
    add(id,option,value){    this.data.push({'id':id,'option':option,'value':value,'operator':this.operator});   }
    addEquals(id,value){     this.add(id,"Igual",value);    }
    addContains(id,value){   this.add(id,"Contiene",value);    }
    addGreaterThanOrEqualTo(id,value){  this.add(id,"MayorIgual",value);}
    addLessThanOrEqualTo(id,value){     this.add(id,"MenorIgual",value);}
    addEqualsIsActiveTrue(){ this.addEquals("isActive","1")}
}