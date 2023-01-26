import LocationViewer from "./LocationViewer"
import {DUMMY_BASE_CORD, DUMMY_CO_ORDS} from './LocationViewerUtils';

const LocationViewerExample = () : JSX.Element => {
  return (
    <div style={{ height: 500, width: 800 }}>
        <LocationViewer
          baseLocation={DUMMY_BASE_CORD}
          otherLocationCoordinates={DUMMY_CO_ORDS}
        />
    </div>
  )
}

export default LocationViewerExample;