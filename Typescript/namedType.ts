type Status = "active" | "pending" | "inactive";

let currentStatus: Status = "active"; 

let response: string = "pending"; // Example value

if (response === "pending") {
    currentStatus = "pending";
}