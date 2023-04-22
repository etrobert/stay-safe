'use client';
import { createRoot } from 'react-dom/client';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './page.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Report from './Report';

const createReportElement = () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<Report />);
  return container;
};

const reportElement = createReportElement();

export default function Home() {
  useEffect(() => {
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZXRyb2JlcnQiLCJhIjoiY2xncnRyYml5MG1xODNmb2g0eHp0ZjVnbSJ9.HQ15TYvSzgdrUWLZxjcFdg';
    const map = new mapboxgl.Map({
      container: styles.map, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    map.on('load', () => {
      const marker = new mapboxgl.Marker({ element: reportElement })
        .setLngLat([-74.5, 40])
        .addTo(map);
    });
  }, []);

  return (
    <main className={styles.main}>
      <div id={styles.map} />
    </main>
  );
}
