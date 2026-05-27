// Assignment Requirements:
// Create two functions : launchBrowser, runTests where,
//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value
//  b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript
let browserName = "Chrome"
let testType="BlackBox"
function launchBrowser()
{
 if (browserName == "Chrome")
    console.log("Chrome Browser")
else 
    console.log("Other Browser")
}
function runTests()
{
    switch (testType)
    {
      case "Smoke":
        console.log("Given Testtype is Smoke");
      break;
      case "Sanity":
        console.log("Given Testtype is Sanity");
      break;
      case "Regression":
        console.log("Given Testtype is Regression");
      break;
      default :
        console.log("Given Testtype is not valid");
      break;
        
    }
    
}
launchBrowser()
runTests()