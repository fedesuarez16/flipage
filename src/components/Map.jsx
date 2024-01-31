

import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    // Inicializa el mapa después de que el componente se monta
    initMap();
  }, []);

  const initMap = () => {
    // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de Google Maps
    const apiKey = 'AIzaSyBq1WSgEnqOohptNqZY6CZYA6WiRVV7FD4';

    // Carga la API de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;

    // Agrega el script al final del cuerpo del documento
    document.body.appendChild(script);

    // Inicializa el mapa una vez que la API se haya cargado
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.74155951356323, lng: -58.56801410453702 }, // Reemplaza con tus coordenadas
        zoom: 15,
      });

      // Puedes agregar marcadores, polígonos, etc., según tus necesidades
      new window.google.maps.Marker({
        position: { lat: -34.74155951356323, lng: -58.56801410453702 },
        map: map,
        title: 'Mi Ubicación',
      });
    };
  };

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;
