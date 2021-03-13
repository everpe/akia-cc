export class Category {

    public id:string;
    public name:string;
    public created_at?:any;
    public updated_at?:any;
    
    constructor(id:string, name:string){
        this.id=id;
        this.name=name;
    }
}