"use client";
import Head from 'next/head';
import ThreeScene from './three';

export default function Home() {
  return (
    <>
      <Head>
        <title>Three.js with Next.js</title>
        <meta name="description" content="A simple Three.js scene in Next.js" />
      </Head>
      <main>
        
        <canvas id="draw" className="w-full h-full"></canvas>
        <ThreeScene />
      </main>
      <style jsx>{`
        html,
        body,
        main {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden; /* Prevent scrollbars */
        }
        canvas {
          display: block;
          width: 100vw; /* Full viewport width */
          height: 100vh; /* Full viewport height */
        }
      `}</style>
    </>
  );
}
