const locationBanksModel = {
  coordinatesBanks: [],
};

function getCoordinatesBanks() {
  return [...locationBanksModel.coordinatesBanks];
}

function setCoordinatesBanks(coordinatesBanks) {
  locationBanksModel.coordinatesBanks = [...coordinatesBanks];
}

export { setCoordinatesBanks, getCoordinatesBanks };
