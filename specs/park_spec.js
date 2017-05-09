var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {

  var park1 = new Park();

  beforeEach(function() {
    park1 = new Park();
    dinosaur2 = new Dinosaur("Velociraptor", 8);
  })

  it("park enclosure starts empty", function() {
    assert.equal(0, park1.enclosure.length);
  });

  it("add dinosaur to park", function() {
    park1.add(dinosaur2);
    assert.equal(1, park1.enclosure.length);
  })

});

