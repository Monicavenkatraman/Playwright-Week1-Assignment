// Assignment Requirements:
// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the result
function gradecalculation(score)
{
    switch(true)
    {
        case (score>=90 && score <=100):
         return "A Grade";
        break;
        case(score>=70 && score <90):
         return "B Grade"
        break;
        case(score>=50 && score <70):
          return "C Grade"
        break;
        default :
          return "D Grade"

    }
}
let score=75.98;
console.log(gradecalculation(score));