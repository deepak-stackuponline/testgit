// function getAge<T>(age: T): T {
//     return age;
// }

// getAge(10);
// getAge("10");

type userDetails = {
    name: string;   
    age: number;};

type adminDetails = {
    firstName: string;  
    role: string;};

const userDetal: userDetails = {
    name: "John Doe", 
    age: 30
};

const adminDetail: adminDetails = {
    firstName: "Jane",  
    role: "Administrator"
};

function getDetails<T>(details:T): T {
    return details;
}

const userValue = getDetails<userDetails>(userDetal);
const adminValue = getDetails<adminDetails>(adminDetail);


