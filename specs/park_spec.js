var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {

  var park1 = new Park();

  beforeEach(function() {
    park1 = new Park();
  })

  it("park enclosure starts empty", function() {
    assert.equal(0, park1.enclosure.length);
  });

});

