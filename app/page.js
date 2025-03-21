// pages/index.js
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
        
        <canvas id='draw' className='h-full'><ThreeScene /></canvas>
      </main>
    </>
  );
}
