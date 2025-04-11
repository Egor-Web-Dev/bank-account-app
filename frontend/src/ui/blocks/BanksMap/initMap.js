import ymaps3 from "../../../lib/ymaps";
import createMapMarker from "./createMapMarker";

const DEFAULT_LOCATION = {
  location: { center: [37.6156, 55.7522], zoom: 10 },
};

function initMap(container, coordinates) {
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
  const map = new YMap(container, DEFAULT_LOCATION);

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  coordinates.forEach((c) => map.addChild(createMapMarker(c)));
}

export default initMap;
