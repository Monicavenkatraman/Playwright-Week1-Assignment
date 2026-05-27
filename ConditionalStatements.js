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