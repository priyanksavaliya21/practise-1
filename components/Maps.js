import React, { useMemo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

// import setupAnalyticsService from '../lib/my-analytics-service'
// AIzaSyCejxA21yEf-nMRZRDv8hSwCAkBAiDoHTY

 

const Maps = () => {
//    const aa = setupAnalyticsService(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
 
  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = useMemo(() => {
    return { lat: -3.745, lng: -38.523 };
  }, []);


  if (!isLoaded) return <p>loading....................................</p>;
  return (
    <>
      <div className="g-maps">
        <GoogleMap zoom={10} center={center} mapContainerStyle={containerStyle}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    </>
  );
};

export { Maps };
