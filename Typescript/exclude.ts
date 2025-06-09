type statusType5 = "active" | "pending" | "inactive";
const status6: Exclude<statusType5, "pending"> = "inactive"; // or "inactive" // Exclude "pending" from the type