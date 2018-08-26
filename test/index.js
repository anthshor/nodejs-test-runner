/*
*
* Simple test runner
*
*/

var helpers = require('./../lib/helpers.js');
var assert = require('assert');

var tests = {};
var x = helpers.getANumber();

// Define tests
tests['number?'] = function(done){
  assert.equal(typeof(x),'number');
  done();  // done() is the callback
}

tests['equal to 1?'] = function(done){
  assert.equal(x,1);
  done();
}

tests['equal to 2?'] = function(done){
  assert.equal(x,2);
  done();
}

var results = {};

// Run tests
runTests = function(){
  var total_passed = 0;
  var total_failed = 0;

  for(var test in tests){
    try {
        tests[test](function(){
            //results[test]= "passed";
            total_passed++;  
        });
      } catch(e){
        results[test]= e;
        total_failed++
      }
  };
  testReport(results,total_passed,total_failed);
};

//Display results
testReport = function (results, passed, failed){
  console.log("");
  console.log("Test Runner")
  console.log("-----------");
  console.log("Total passed = "+passed);
  console.log("Total failed = "+failed);
  console.log("");
  console.log("Reason for failure:")
  for(var test in results){
    console.log(" Test   : '"+test+"'");
    console.log(" Reason : "+results[test]);
  }
  console.log("");
}

runTests();



