type userDetail = {
    name: string;
    age: number;
};
type adminDet = userDetail &{
    role: string;
};

const userDetall: userDetail = {
    name: "John Doe", 
    age: 30
};

const adminDetaill: adminDet = {
    name: "Jane",  
    age: 50,
    role: "Administrator"
};

function getDetailss<T>(details:T): T {
    return details;
}
