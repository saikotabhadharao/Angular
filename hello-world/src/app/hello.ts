interface User{
    name:string;
    id:number;
}
class UserAccount{
    name:string;
    id:number;
    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
    

}
var user:User=new UserAccount("murthy",1);
console.log(user.name);