type User1 = {
    readonly name: string; // 'readonly' makes this property immutable
    age: number;
};

const userDetailing: User1 = {
    name: "John Doe",   
    age: 30,
};
//userDetailing.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property
userDetailing.age = 31; // This is allowed since 'age' is not readonly