export interface Shop {
   
    id:string;
    name:string;
    web_site?:string;
    cellphone_one?:string;
    cellphone_two?:string;
    location?:string;
    attention_schedule?:string;
    image:string;
    category_id:string;
    
    // constructor(id:string,name:string, web_site:string,cellphone_one:string,
    //     cellphone_two:string, location:string,attention_schedule:string,
    //     image:string,category_id:string){

    //     this.id=id;
    //     this.name=name;
    //     this.web_site=web_site;
    //     this.cellphone_one=cellphone_one;
    //     this.cellphone_two=cellphone_two;
    //     this.location=location;
    //     this.attention_schedule=attention_schedule;
    //     this.image=image;
    //     this.category_id=category_id;
    // }
}