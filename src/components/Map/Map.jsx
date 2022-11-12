import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Map = ({ center, zoom }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);
  return <div className="w-full h-screen mt-16" ref={ref}></div>;
};

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <h1>loading...</h1>;
    case Status.FAILURE:
      return <h1>failed</h1>;
    case Status.SUCCESS:
      return <h1>success</h1>;
    default:
      return <h1>default</h1>;
  }
};

const MapWrapper = ({ longitude, latitude }) => {
  const zoom = 6;
  const center = { lat: latitude, lng: longitude };
  return (
    <Wrapper apiKey={process.env.GOOGLE_MAP_API_KEY} render={render}>
      <Map center={center} zoom={zoom} />
    </Wrapper>
  );
};

export default MapWrapper;
