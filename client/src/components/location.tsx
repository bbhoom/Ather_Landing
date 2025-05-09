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
            <div className="w-full h-full rounded-md overflow-hidden border border-primary/30 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15561.316732279324!2d77.3893506!3d13.204731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1f106660d2ff5%3A0x0!2zMTPCsDExJzQwLjEiTiA3N8KwMjMnMjIuOCJF!5e0!3m2!1sen!2sin!4v1715248520000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

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
