
export default class TableData {
    constructor(){
        this.page=0;
        this.lastSearchText="";
        this.lastOrderBy ={"field":"", "direction":""};
        this.promise=null;
        this.query=null;
        this.header=null;
        this.service=null;
    }

    setQuery(_query){    this.query=_query;       }
    setHeader(_header){  this.header= _header;    }
    setService(_service){  this.service= _service;}

    setPage(){
        this.page=(this.lastSearchText=== this.query.search) ? this.query.page  : 0;
        if (this.query.orderBy!==undefined) {
            if (this.query.orderBy.field!==this.lastOrderBy.field || this.query.orderDirection !== this.lastOrderBy.direction){
                this.page=0;
            }
        }
    }

    setLastOrderBy(){
        if (this.query.orderBy===undefined) this.lastOrderBy={"field":"", "direction":""};
        else                                this.lastOrderBy={"field":this.query.orderBy.field, "direction":this.query.orderDirection};
    }    
    
    setLastSearchText(){    this.lastSearchText= this.query.search;  }

    setSearchCriteria(){
        this.service.searchCriteria.clear();
        this.service.searchCriteria.setOperator("or");
        let self = this;
        if (this.query.search.length>0){
            this.header.forEach(function(item) {
                self.service.searchCriteria.addContains(item.field, self.query.search);    
            });
        }
        
        if (this.service.initSearchCriteria!==null){
            this.service.initSearchCriteria.get().forEach(function(item) {
                self.service.searchCriteria.setOperator(item.operator);
                self.service.searchCriteria.add(item.id, item.option, item.value);
            });
        }
        console.log("search criteria ", this.service.searchCriteria.get());
    }

    setOrderCriteria(){
        this.service.orderCriteria.clear();
        if (this.query.orderBy!==undefined) this.service.orderCriteria.add(this.query.orderBy.field,  this.query.orderDirection);
        let self = this;
        if (this.service.initOrderCriteria!==null){
            this.service.initOrderCriteria.get().forEach(function(item) {
                self.service.orderCriteria.add(item.id, item.option);
            });
        }
    }

    async setPromise(){
        try{
            let result = await this.service.pageRegister(this.page, this.query.pageSize); 
            this.service.searchCriteria.clear();
            this.promise= new Promise((resolve, reject) => { 
                if (result.error!==null) resolve({ data: [], page: 0, totalCount: 0});// reject("Error al cargar los datos");
                else if (result.data===null)    resolve({ data: [], page: 0 , totalCount: 0});
                else resolve({ data: result.data.content, page: result.data.number , totalCount: result.data.totalElements});
            });
        }catch(error){
            console.log("TableData",error);
            this.promise= new Promise((resolve, reject) => { 
                resolve({ data:[], page: 0 , totalCount: 0});
            });
            
        }
    }

    async getPromiseResponse(){   
        this.setPage();
        this.setLastOrderBy();
        this.setLastSearchText();
        this.setSearchCriteria();
        this.setOrderCriteria();
        await this.setPromise();
        return this.promise
    };
}