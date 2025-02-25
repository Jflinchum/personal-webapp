'use client'
import React, { useState } from 'react';
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Default coords off screen, so that the gradient doesn't appear until mouse movement
  const [mouseCoord, setMouseCoord] = useState({ x: -10000, y: -10000 });

  const handlePointerMove = (e: React.PointerEvent) => {
    // Only update on mouse events. Ignore touch
    if (e.pointerType === 'mouse') {
      setMouseCoord({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <html lang="en" className='h-full'>
      <head>
        <Script type='text/javascript' src="/personal-webapp/darkThemeApply.js" strategy='beforeInteractive'/>
        <meta property='og:image' content='https://jflinchum.github.io/personal-webapp/Jonathan_Flinchum.jpg'/>
        <meta property='og:image:type' content='image/jpg'/>
        <meta property='og:image:width' content='200'/>
        <meta property='og:image:height' content='200'/>
        <meta property="og:image:alt" content="Jonathan Flinchum" />
        <meta property='twitter:image' content='https://jflinchum.github.io/personal-webapp/Jonathan_Flinchum.jpg'/>
        <meta property='twitter:image:type' content='image/jpg'/>
        <meta property='twitter:image:width' content='200'/>
        <meta property='twitter:image:height' content='200'/>
        <meta property="twitter:image:alt" content="Jonathan Flinchum" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
        onPointerMove={(e) => handlePointerMove(e)}
        suppressHydrationWarning
      >
        <div className='pointer-events-none fixed inset-0 -z-30 transition duration-300' style={{background: `radial-gradient(600px at ${mouseCoord.x}px ${mouseCoord.y}px, var(--background-secondary), transparent 80%)`}} />
        {children}
      </body>
    </html>
  );
}
