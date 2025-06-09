const statusType1 ={
    COMPLETED:"completed",
    FAILED:"failed",    
    PENDING:"pending"
} as const;

function getStatus(orderID:string, status:keyof typeof statusType1){
    //statusType1.PENDING = "Hello";
    //console.log(orderID, statusType1[status]);//value
    console.log(orderID, status); //key
}   

getStatus("12345", "PENDING"); // It works on runtime

