import { useState, useCallback } from 'react';
import { LOCATION_LANDMARKS, IMAGES } from '@/lib/constants';
import SectionHeading from './section-heading';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

// Aether location coordinates (near Nandi Hills)
const center = {
  lat: 13.3702,
  lng: 77.6835
};

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [
        { saturation: -100 },
        { hue: '#000000' }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { color: '#193341' }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ]
};

export default function Location() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBvitxiZsIPiXvT0XBf9M3L2YDQc7TWpgU'
  });

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <section id="location" className="py-24 bg-gradient-to-b from-background to-secondary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SectionHeading 
            title="Location" 
            highlightedWord="Advantages" 
            alignment="center"
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategically located for convenience while maintaining the tranquility of nature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="animate-fade-in">
            <img 
              src={IMAGES.locationMapDetailed} 
              alt="Aether Location Map" 
              className="w-full h-auto rounded-md shadow-xl border border-primary/30" 
            />
          </div>
          
          <div className="animate-fade-in rounded-md overflow-hidden shadow-2xl border border-primary/30">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={options}
              >
                <Marker 
                  position={center} 
                  icon={{
                    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24' fill='none' stroke='%23D4AF37' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E",
                    scaledSize: new google.maps.Size(36, 36)
                  }}
                  onClick={() => setShowInfoWindow(true)}
                >
                  {showInfoWindow && (
                    <InfoWindow
                      position={center}
                      onCloseClick={() => setShowInfoWindow(false)}
                    >
                      <div>
                        <h3 className="text-md font-medium text-gray-900">Aether by Mythreyi</h3>
                        <p className="text-sm text-gray-600">Premium Villa Plots near Nandi Hills</p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              </GoogleMap>
            ) : (
              <div className="flex justify-center items-center h-full bg-secondary/20">
                <p className="text-primary">Loading map...</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="animate-fade-in">
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-6 text-center">Nearby Landmarks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {LOCATION_LANDMARKS.map((landmark) => (
              <div 
                key={landmark.id}
                className="bg-secondary/30 p-6 rounded-md hover-scale"
              >
                <div className="flex items-center mb-3">
                  <i className={`fas fa-${landmark.icon} text-primary mr-3 text-xl`}></i>
                  <h4 className="text-white font-medium">{landmark.name}</h4>
                </div>
                <p className="text-primary font-semibold">{landmark.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
