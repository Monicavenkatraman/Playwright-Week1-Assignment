
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