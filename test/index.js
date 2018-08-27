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
  var counter = 0;
  console.log("");
  console.log("----- Running Tests -----")
  console.log("");
  for(var test in tests){
    counter++
    try {
        tests[test](function(){
            //results[test]= "passed";
            console.log('\x1b[32m%s\x1b[0m',test);
            total_passed++;  
        });
      } catch(e){
        console.log('\x1b[31m%s\x1b[0m',test);
        results[test]= e;
        total_failed++
      }
  };
  testReport(results,total_passed,total_failed,counter);
};

//Display results
testReport = function (results, passed, failed, total){
  console.log("");
  console.log("----- Test Summary -----")
  console.log("");
  console.log("Total Tests : "+ total);
  console.log('\x1b[32m%s\x1b[0m',"     Passed : "+passed);
  console.log('\x1b[31m%s\x1b[0m',"     Failed : "+failed);
  console.log("");
  console.log("----- Failure Details -----")
  for(var test in results){
    console.log("");
    console.log("       Name : '"+test+"'");
    console.log("     Actual : " + results[test].actual);
    console.log("   Expected : " + results[test].expected);
    console.log("       Test : " + results[test].actual + " " + results[test].operator + " " + results[test].expected)
    console.log("");
    console.log("Error Stack : ");
    console.log(results[test])
    console.log("");
 
  }
  console.log("");
}

runTests();



