const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //Setup
      const expected = "cock-a-doodle-doo!";
      //exercise
      const actual = Rooster.announceDawn();
      //verify
      assert.equal(expected, actual);
    });
  });
});
describe(".timeAtDawn", () => {
  it("returns its argument as a string", () => {
    //setup
    const expected2 = "6";
    //exercise
    const actual2 = Rooster.timeAtDawn(6);
    //verify
    assert.strictEqual(expected2, actual2);
  });
  it("throws an error if passed a number less than 0", () => {
    //setup
    const inputNumber = -5;
    const expected3 = RangeError;

    //verify
    assert.throws(() => {
      Rooster.timeAtDawn(inputNumber);
    }, expected3);
  });
  it("throws an error if passed a number greater than 23", () => {
    //setup
    const inputNumber2 = 28;
    const expected4 = RangeError;

    //verify
    assert.throws(() => {
      Rooster.timeAtDawn(inputNumber2);
    }, expected4);
  });
});
