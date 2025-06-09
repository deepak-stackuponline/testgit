interface userDetaill  {
    name: string;
    age: number;
};
interface adminDett extends userDetail{
    role: string;
};

const userDetalll: userDetail = {
    name: "John Doe", 
    age: 30
};

const adminDetailll: adminDet = {
    name: "Jane",  
    age: 50,
    role: "Administrator"
};

function getDetailsss<T>(details:T): T {
    return details;
}

//interface only takes objects
//while type can take any data type

