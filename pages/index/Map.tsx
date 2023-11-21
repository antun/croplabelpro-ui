import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";
import './code.css'

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export { Map }

function Map({onMapMove}) {
  const center = { lat: -19.596785, lng: -45.998827 };
  const zoom = 17;
  
  return (
    <Wrapper apiKey={apiKey}>
      <MyMapComponent center={center} zoom={zoom} mapTypeId="satellite" onMapMove={onMapMove}/>
    </Wrapper>
  )
}

function MyMapComponent({ center, zoom, mapTypeId, onMapMove }: { center: google.maps.LatLngLiteral; zoom: number; mapTypeId: string }) {
  const ref = useRef();
  if (ref.current) {
    console.log('@@@ ref', ref);
  }

  useEffect(() => {
    const mapObj = new window.google.maps.Map(ref.current, {
      center,
      zoom,
      mapTypeId
    });

    mapObj.addListener('bounds_changed', () => {
      onMapMove(mapObj.center.lat(), mapObj.center.lng());
    });

  }, []);

  return <div ref={ref} id="map" />;
}

