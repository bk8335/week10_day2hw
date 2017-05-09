var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {

  var park1 = new Park();

  beforeEach(function() {
    park1 = new Park();
    dinosaur2 = new Dinosaur("Velociraptor", 8);
    dinosaur3 = new Dinosaur("Triceratops", 1);
    dinosaur4 = new Dinosaur("Triceratops", 12);
  })

  it("park enclosure starts empty", function() {
    assert.equal(0, park1.enclosure.length);
  });

  it("add dinosaur to park", function() {
    park1.add(dinosaur2);
    assert.equal(1, park1.enclosure.length);
  });

  it("remove all Triceratops from the park", function() {
    park1.add(dinosaur2);
    park1.add(dinosaur3);
    park1.add(dinosaur4);
    assert.equal(3, park1.enclosure.length);
    park1.removeByType("Triceratops");
    assert.equal(1, park1.enclosure.length);
  });

  it("return all dinosaurs with >2 children", function() {
    park1.add(dinosaur2);
    park1.add(dinosaur3);
    park1.add(dinosaur4);
    var result = park1.returnDinosaursWithTwoKids();
    assert.equal(2, result.length);
  });

  it("dinoCounter should return 24", function() {
    park1.add(dinosaur2);
    park1.add(dinosaur3);
    park1.add(dinosaur4);
    // var result = park1.dinosaursAfterOneYear();
    assert.equal(24, park1.dinosaursAfterOneYear() );
  });

});

