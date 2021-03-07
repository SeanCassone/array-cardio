const { expect } = require("chai");

const {
  numberOfOwners,
  numberOfUnits,
  getListofRentedUnits,
} = require("../src/main.js");

const ownersFixture = require("./fixtures/owners.fixture.js");
const unitsFixture = require("./fixtures/units.fixture");

describe("numberOfUnits", () => {
  it("should return the total number of units in the building", () => {
    const actual = numberOfUnits([{}, {}, {}]);
    expect(actual).to.equal(3);
  });

  it("should return zero if the array is empty", () => {
    const actual = numberOfUnits([]);
    expect(actual).to.equal(0);
  });
});

describe("numberOfOwners", () => {
  it("should return the number of unit owners", () => {
    const actual = numberOfOwners([{}, {}, {}, {}]);
    expect(actual).to.equal(4);
  });
  it("should return zero if the array is empty", () => {
    const actual = numberOfOwners([]);
    expect(actual).to.equal(0);
  });
});

describe("getListofRentedUnits", () => {
  it("should retun an array of unit objects that are rented", () => {});
});

describe("listUnitsByOwners", () => {
  it("should return an array of unit objects for each owner", () => {});
});
