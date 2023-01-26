import 'leaflet/dist/leaflet.css';
import { useMemo } from 'react';
import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import {CoordinatesArray, LocationViewerProps} from './LocationViewerTypes';
import { findNearestNCoordinates } from './LocationViewerUtils';

import BaseMarkerIconPng from "./icons/marker-icon-red.png";
import MarkerIconPng from "./icons/marker-icon-blue.png";

/**
 * @param baseLocation the base location coordinates
 * @param otherLocationCoordinates other location coordinates
 * @param nearestLocationsToShow (optional) number of nearest locations to show [default value is 3]
 * @returns Location Viewer Component that shows a map with a base location and other n locations
 */

const LocationViewer = ({ baseLocation, otherLocationCoordinates, nearestLocationsToShow = 3 }: LocationViewerProps): JSX.Element => {
  // Making sure the calculation is only done if any of the parameters change
  const coordsToShow: CoordinatesArray = useMemo(() =>
    findNearestNCoordinates(baseLocation, otherLocationCoordinates, nearestLocationsToShow
  ), [baseLocation, otherLocationCoordinates, nearestLocationsToShow])

  return (
    <MapContainer center={[baseLocation.lat, baseLocation.long]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[baseLocation.lat, baseLocation.long]} icon={new Icon({ iconUrl: BaseMarkerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
        <Popup>
          {baseLocation.label}
        </Popup>
      </Marker>
      {coordsToShow.map((cord, i) => (
        <Marker key={i} position={[cord.lat, cord.long]} icon={new Icon({ iconUrl: MarkerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
          <Popup>
            {cord.label}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LocationViewer;
