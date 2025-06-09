// type Food = {
//     KFC : string;
//     Pizza: string;
//     Chicken: string;
//     Burger: string;
// };

type Food = Record<string, string | Record<string, string>>;

const food: Food = {
    PIZZA: "Pizza",
    BURGER: "Burger",
    CHICKEN: {
        Fry: "Fried Chicken",
        Roast: "Roasted Chicken",
        Chaps: "Chicken Chaps"
    },
};