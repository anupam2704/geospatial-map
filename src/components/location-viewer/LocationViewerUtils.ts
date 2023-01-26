import { LatLongObj, CoordingateDistanceObj, CoordingateObj, CoordinatesArray, CoordinatesDistanceArray } from "./LocationViewerTypes";

/**
 * @param base base coordinates (coordinates 1)
 * @param to to coordinates (coordinates 2)
 * @param unit the unit in which the distance is required, defaults to KM
 * @returns
 */
export const calculateDistance = (base: LatLongObj, to: LatLongObj, unit?: "KM" | "M") : number => {
  const {lat : lat1, long: long1} = base;
  const {lat : lat2, long: long2} = to;
  if ((lat1 == lat2) && (long1 == long2)) {
		return 0;
	}
	else {
		const radlat1 = Math.PI * lat1/180;
		const radlat2 = Math.PI * lat2/180;
		const theta = long1-long2;
		const radtheta = Math.PI * theta/180;
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
    const distKM = dist * 1.609344;
    if(unit === "M") {
      return distKM * 1000;
    }
    return distKM;
	}
}

/**
 * Can be used with sort method of javascript
 * @param currElem
 * @param nextElem
 * @returns distance between two points
 */
export function compareDistance(currElem: CoordingateDistanceObj, nextElem: CoordingateDistanceObj) : number {
  return currElem.distance - nextElem.distance
}

/**
 *
 * @param base the base coordinates to calculate distance from
 * @param coordinatesArray the array of coordinates to find the distance
 * @param n number of nearest locations to be found
 * @returns coordinates array
 */
export const findNearestNCoordinates = (base: LatLongObj, coordinatesArray:CoordinatesArray, n?: number) :CoordinatesArray => {
  if(!n) {
    n = 3;
  }
  if(coordinatesArray.length <= n) {
    return coordinatesArray
  }
  const distanceArr : CoordinatesDistanceArray = []
  for(let i=0; i<coordinatesArray.length; i++) {
    distanceArr.push({
      ...coordinatesArray[i],
      distance: calculateDistance(base, {lat: coordinatesArray[i].lat, long: coordinatesArray[i].long}, "M")
    })
  }
  // Sort and slice the distance array
  const sortedSlicedDistanceArr = (distanceArr.sort(compareDistance)).slice(0, n);
  // We do not have to return the distance property in the array of objects
  const coordArrayToReturn = sortedSlicedDistanceArr.map(({distance, ...keepAttrs}) => keepAttrs)
  return coordArrayToReturn;
}

// Some Dummy Methods for component testing
export const DUMMY_BASE_CORD : CoordingateObj = { lat: 17.447, long: 78.354, label: 'PSR Prime Towers' }
export const DUMMY_CO_ORDS : CoordinatesArray = [
  { lat: 17.4484, long: 78.3734, label: 'Dell Office' },
  { lat: 17.4473, long: 78.3557, label: 'Cognizant Office' },
  { lat: 17.4408, long: 78.3775, label: 'Accenture Office' },
  { lat: 17.4418, long: 78.3971, label: 'Deloitte Office' },
  { lat: 17.4155, long: 78.3442, label: 'Nvidia Office' },
  { lat: 17.4248, long: 78.3421, label: 'Wipro Office' },
  { lat: 17.4279, long: 78.3392, label: 'Microsoft Office' },
  { lat: 17.4955, long: 78.4265, label: 'Infosys Office' },
  { lat: 15.9129, long: 79.74, label: 'Google Office' },
  { lat: 17.4204, long: 78.3395, label: 'Amazon Office' }
]

export const dummyDistanceFindExecution = () :CoordinatesArray => {
  const nearestCoords = findNearestNCoordinates(DUMMY_BASE_CORD, DUMMY_CO_ORDS, 3)
  return nearestCoords;
}