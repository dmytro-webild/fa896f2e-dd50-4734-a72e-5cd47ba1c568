import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Carvo Auto Care | Premium Mobile Detailing in Aurora',
  description: 'Experience convenient, fast, and high-end mobile auto detailing for busy car owners in Aurora. We come to you, delivering showroom-ready results for your vehicle!',
  keywords: ["mobile auto detailing, car cleaning, car detailing Aurora, headlight restoration, vehicle care, premium car wash, convenient car detailing"],
  openGraph: {
    "title": "Carvo Auto Care | Premium Mobile Detailing",
    "description": "Experience convenient, fast, and high-end mobile auto detailing for busy car owners in Aurora. We come to you, delivering showroom-ready results!",
    "url": "https://carvoautocare.com",
    "siteName": "Carvo Auto Care",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/guy-rinsing-auto-car-wash-with-water-gun_651396-2789.jpg",
        "alt": "Mobile auto detailing van cleaning a car"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Carvo Auto Care | Premium Mobile Detailing",
    "description": "Experience convenient, fast, and high-end mobile auto detailing for busy car owners in Aurora. We come to you, delivering showroom-ready results!",
    "images": [
      "http://img.b2bpic.net/free-photo/guy-rinsing-auto-car-wash-with-water-gun_651396-2789.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
