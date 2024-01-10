'use client';

import { useLoadScript, GoogleMap, MarkerF, CircleF } from '@react-google-maps/api';
import { useMemo, FC } from 'react';

interface gMapProps {
  lat: number,
  lng: number,
  areaRadius: number,
  width?: string,
  height?: string
}

const GMap: FC<gMapProps> = ({ lat, lng, areaRadius}) => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat, lng }),
    [lat, lng]
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      zoomControl: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  if(!isLoaded){
    return (
      <div className='w-full h-full bg-white'>

      </div>
    );
  }

  return (
    <GoogleMap
      options={mapOptions}
      zoom={9}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{ width: '100%', height: '100%' }}
    >
    <MarkerF 
      position={mapCenter}  
      icon={{
        url: '/vectors/mapmarker.svg',
        scaledSize: new google.maps.Size(200, 50),
      }}
    />

    <CircleF
      center={mapCenter}
      radius={areaRadius}
      options={{
        fillColor: 'red',
        strokeColor: 'red',
        strokeOpacity: 0.4,
        fillOpacity: 0.1
      }}
    />
  </GoogleMap>
  );
};

export default GMap;