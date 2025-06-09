// enum statusType{
//     PENDING = 1,
//     COMPLETED,
//     FAILED
// }

// enum statusType{
//     PENDING,
//     COMPLETED,
//     FAILED
// }

enum statusType{
    PENDING = "pending",
    COMPLETED = "completed",
    FAILED = "failed"
}

function getStatus(orderID:string, status:string){
    console.log(orderID, status)
}
//It works on runtime
getStatus("12345", statusType.PENDING);
