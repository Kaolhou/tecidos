import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';

const STORE_ADDRESS = "Rua Itororó, 41, Centro Santos, SP";

const LocationMap = () => {
  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_ADDRESS)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative">
      <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.1239!2d-46.3337!3d-23.9646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU3JzUyLjUiUyA0NsKwMjAnMDEuMyJX!5e0!3m2!1spt!2sbr!4v1620000000000!5m2!1spt!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Loja"
        />
      </div>
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-petrol-600" />
          <div>
            <p className="font-medium text-gray-900">Nossa Loja</p>
            <p className="text-gray-600">{STORE_ADDRESS}</p>
            <p className="text-xs text-gray-500 mt-1">Segunda a Sexta: 9h às 18h</p>
          </div>
        </div>
      </div>
      <Button
        variant="secondary"
        size="sm"
        onClick={openInGoogleMaps}
        className="absolute bottom-4 right-4 shadow-lg"
      >
        <ExternalLink className="h-3 w-3 mr-1" />
        Abrir no Google Maps
      </Button>
    </div>
  );
};

export default LocationMap;