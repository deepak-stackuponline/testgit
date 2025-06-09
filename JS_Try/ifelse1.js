const prompt = require ("prompt-sync")({sigint: true});
const x = prompt("Please enter the Score"+ " ");
if(x >=90 && x <=100)
{
    //Score is between 90 and 100 Inclusive
    console.log("Grade A");
}
else if(x>=80 && x <= 89)
{
    //Score is between 80 and 89 Inculsive
    console.log("Grade B");
}
else if(x >= 70 && x <= 79)
{
    //Score is between 70 and 79 Inclusive
    console.log("Grade C");
}
else if(x >=60 && x <=69)
{
    //Score is between 60 and 69
    console.log("Grade D");
}
else if(x >=0 && x <= 59)
{
    //Score is between 0 and 59
    console.log("FAIL");
}
else{
    console.log("Incorrect Value");

}