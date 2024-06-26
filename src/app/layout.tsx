import "./styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fettah Aud",
  description: "Creative Frontend Developer | React, GSAP, ThreeJs, WebGL",
  openGraph: {
    type: "website",
    url: "https://fettah.dev",
    title: "Fettah Aud",
    description: "Creative Frontend Developer | React, GSAP, ThreeJs, WebGL",
    images: [
      {
        url: "/meta-photo.png",
        width: 1200,
        height: 630,
        alt: "Fettah Aud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://fettah.dev",
    title: "Fettah Aud",
    description: "Creative Frontend Developer | React, GSAP, ThreeJs, WebGL",
    images: [
      {
        url: "/meta-photo.png",
        width: 1200,
        height: 630,
        alt: "Fettah Aud",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
