import ymaps3 from "../../../lib/ymaps";

function createMapMarker(coordinates) {
  const marker = document.createElement("div");
  marker.classList.add("map__marker");

  return new ymaps3.YMapMarker(
    { coordinates: [coordinates.lon, coordinates.lat] },
    marker,
  );
}

export default createMapMarker;
