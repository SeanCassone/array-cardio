const expect = require("chai").expect;

function numberOfOwners(owners) {
  return owners.length;
}
function numberOfUnits(units) {
  return units.length;
}

function getListofRentedUnits(units, owners) {}

function listUnitsByOwners(units, owners) {}

module.exports = {
  numberOfOwners,
  numberOfUnits,
  getListofRentedUnits,
  listUnitsByOwners,
};
