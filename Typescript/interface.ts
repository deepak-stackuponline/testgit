//Interface
interface Details {
    name: string;
    age: number | String; 
    active?: boolean;
    getName: () => void;
}

let userDetail: Details = {
    name: "John Doe",
    age: "30 Years",
    active: true,
    getName() {
        console.log(this.name);
    }
};

function getUserName(userDetail:Details){
    return userDetail.name;
}
getUserName(userDetail);

function getUserName1({name,age,active}:{name:string, age:number, active?: boolean}){
    return name;
}

getUserName1({name: "Jane Doe", age: 25, active: true});
console.log(getUserName1);