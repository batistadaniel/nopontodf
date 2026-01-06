import React, { useEffect, useRef } from "react";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapView() {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current, { zoomControl: true, tap: true }).setView(
      [-15.7942, -47.8822],
      11
    );

    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
    }).addTo(map);

    return () => map.remove();
  }, []);

  // em mobile queremos que o mapa ocupe o espaço visível acima da barra (main já tem pb-16)
  // h-screen garante que ele preencha a altura; em md+ como temos padding-left, também funciona
  return (
    <div className="h-[calc(100vh-4rem)] md:h-screen">
      <div ref={mapRef} id="map" className="h-full w-full" />
    </div>
  );
}