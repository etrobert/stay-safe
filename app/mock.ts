const generateMagnitude = () => 2 * Math.floor((Math.random() * 2) % 2) - 1;

const baseCoordinates = {
  lng: 13,
  lat: 52,
};
const generateCoordinates = () => [
  baseCoordinates.lng + Math.random(),
  baseCoordinates.lat + Math.random(),
];

const generateFeature = () => ({
  type: 'Feature',
  properties: {
    id: 'ak16994521',
    mag: generateMagnitude(),
    time: 1507425650893,
    felt: null,
    tsunami: 0,
  },
  geometry: { type: 'Point', coordinates: generateCoordinates() },
});

const generateFeatures = () =>
  Array.from(Array(800).keys()).map(() => generateFeature());

const generateData = () => ({
  type: 'FeatureCollection',
  crs: {
    type: 'name',
    properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
  },
  features: generateFeatures(),
});

export { generateData, generateFeatures };
