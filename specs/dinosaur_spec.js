var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

//  "Tyrannosaurus", "Velociraptor", "Triceratops"

describe("Dinosaur", function() {
  var dinosaur1;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 5);
  });

  it("should be type T-Rex", function() {
    assert.equal("Tyrannosaurus", dinosaur1.type);
  })

  it("should have 5 offspringPerYear", function() {
    assert.equal(5, dinosaur1.offspringPerYear);
  })



});