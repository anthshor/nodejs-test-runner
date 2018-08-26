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

// Run tests
for(var test in tests){
    try {
        tests[test](function(){
            console.log(test+" passed");  
        });
      } catch(e){
        console.log(test+" failed");
      }
};



