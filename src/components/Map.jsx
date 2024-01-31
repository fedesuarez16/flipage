// Map.jsx
import React, { useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Mapa = (props) => {
  useEffect(() => {
    // Función para inicializar el mapa
    const inicializarMapa = () => {
      // Coordenadas de la ubicación
      const ubicacion = { lat: -34.74155951356323, lng: -58.56801410453702 }; // Reemplaza con tus propias coordenadas

      // Opciones del mapa
      const opcionesMapa = {
        center: ubicacion,
        zoom: 15,
      };

      // Crear el mapa
      const mapa = new props.google.maps.Map(document.getElementById('mapa'), opcionesMapa);

      // Agregar un marcador
      new props.google.maps.Marker({
        position: ubicacion,
        map: mapa,
        title: 'Mi Ubicación', 
      });
    };

    inicializarMapa();
  }, [props.google.maps]);

  return <div id="mapa" style={{ width: '100%', height: '400px' }}></div>;
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBq1WSgEnqOohptNqZY6CZYA6WiRVV7FD4', // Reemplaza con tu propia clave
})(Mapa);
