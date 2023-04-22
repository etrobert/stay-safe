'use client';
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './page.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import reportElement from './reportElement';

export default function Home() {
  const marker = useRef<mapboxgl.Marker | null>(null);
  useEffect(() => {
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZXRyb2JlcnQiLCJhIjoiY2xncnRyYml5MG1xODNmb2g0eHp0ZjVnbSJ9.HQ15TYvSzgdrUWLZxjcFdg';
    const map = new mapboxgl.Map({
      container: styles.map, // container ID
      style: 'mapbox://styles/mapbox/light-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    map.on('load', () => {
      // Add a geojson point source.
      // Heatmap layers also work with a vector tile source.
      map.addSource('earthquakes', {
        type: 'geojson',
        data: 'earthquakes.geojson',
      });
      map.addLayer(
        {
          id: 'earthquakes-heat',
          type: 'heatmap',
          source: 'earthquakes',
          paint: {
            // Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              0,
              0,
              3,
              1,
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              1,
              9,
              3,
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0,
              'transparent',
              0.3,
              'yellow',
              0.6,
              'orange',
              1,
              'red',
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              2,
              9,
              20,
            ],
          },
        },
        'waterway-label'
      );
      map.addLayer(
        {
          id: 'earthquakes-heat-2',
          type: 'heatmap',
          source: 'earthquakes',
          paint: {
            // Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              -6,
              1,
              0,
              0,
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              1,
              9,
              3,
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0,
              'transparent',
              0.3,
              'yellow',
              0.6,
              'green',
              1,
              'blue',
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              2,
              9,
              20,
            ],
          },
        },
        'waterway-label'
      );

      map.on('click', ({ lngLat }) => {
        if (marker.current !== null) marker.current.remove();

        let newMarker = new mapboxgl.Marker({ element: reportElement() })
          .setLngLat([lngLat.lng, lngLat.lat])
          .addTo(map);

        marker.current = newMarker;
      });
    });
  }, []);

  return (
    <main className={styles.main}>
      <div id={styles.map} />
    </main>
  );
}
