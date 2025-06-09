type User3 = {
    name: string;
    age: number;
    salary: number;
    phone: number;
};
//Pick is a utility type that allows you to create a new type by picking a set of properties from an existing type.
// const userDetails3: Pick<User3,"name"|"age" > = {
//     name: "John Doe",
// };

// const userDetails4: Pick<User3,"name"|"age"|"phone" > = {
//     name: "John Doe",
//     age: 30,
//     phone: 1234567890,
// };

//Omitting the salary property from User3 using Pick
const userDetails4: Omit<User3,"salary"> = {
    name: "John Doe",
    age: 30,
    phone: 1234567890,
};
