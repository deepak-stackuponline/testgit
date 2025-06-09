//Readonly types in TypeScript allow you to create immutable objects, meaning their properties cannot be changed after they are created. This is useful for ensuring that certain data structures remain constant throughout your application.

type User2 = {
    name: string;
    age: number;
};

// const userDetails2: Readonly<User2> = {
//     name: "John Doe",
//     age: 30,
// };

// userDetails2.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property

//Partial types in TypeScript allow you to create objects where some or all properties are optional. This is useful when you want to define an object that may not have all properties defined at the time of creation.
// However, you can still modify properties that are not readonly.
// const userDetails2: Partial<User2> = {
//     name: "John Doe",
//     age: 30,
// };


//Required types in TypeScript allow you to create objects where all properties are required. This is useful when you want to ensure that an object has all its properties defined at the time of creation.

const userDetails2: Required<User2> = {
    name: "John Doe",
    age: 30,
};
