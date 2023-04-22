'use client';
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './page.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';

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
  }, []);

  return (
    <main className={styles.main}>
      <div id={styles.map} />
    </main>
  );
}
