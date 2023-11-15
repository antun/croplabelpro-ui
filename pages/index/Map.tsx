import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";
import './code.css'

export { Map }

function Map() {
  const center = { lat: -19.596785, lng: -45.998827 };
  const zoom = 17;

  return (
    <Wrapper apiKey={"AIzaSyBj92vPkR0DBR6emjqohYXorNPVePsUl5o"} style={{height: '100%'}}>
      <MyMapComponent center={center} zoom={zoom} mapTypeId="satellite" />
    </Wrapper>
  )
}

function MyMapComponent({ center, zoom, mapTypeId }: { center: google.maps.LatLngLiteral; zoom: number; mapTypeId: string }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
      mapTypeId
    });
  });

  return <div ref={ref} id="map" />;
}

