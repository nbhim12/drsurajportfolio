import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Dr. Suraj Naslapur | Consultant Orthodontist in Bangalore",
  description:
    "Dr. Suraj Naslapur is a Consultant Orthodontist in Bangalore with 10+ years of experience. Specialises in Damon Braces, Invisalign, Spark Aligners, Ceramic Braces, and Myofunctional Appliances. BDS · MDS (Orthodontics).",
  keywords: [
    "orthodontist Bangalore",
    "Damon braces Bangalore",
    "Invisalign Bangalore",
    "Spark aligners",
    "ceramic braces",
    "metal braces",
    "Dr Suraj Naslapur",
    "orthodontic treatment Bangalore",
    "malocclusion treatment",
    "teeth alignment Bangalore",
    "MDS orthodontics",
  ],
  authors: [{ name: "Dr. Suraj Naslapur" }],
  creator: "Dr. Suraj Naslapur",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  metadataBase: new URL("https://drsurajnaslapur.com"),
  openGraph: {
    title: "Dr. Suraj Naslapur | Consultant Orthodontist in Bangalore",
    description:
      "Specialist in Damon Braces, Invisalign & advanced orthodontic care. 10+ years experience. Book a consultation today.",
    url: "https://drsurajnaslapur.com",
    siteName: "Dr. Suraj Naslapur",
    images: [
      {
        url: "/images/dentist.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Suraj Naslapur – Consultant Orthodontist Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Suraj Naslapur | Consultant Orthodontist in Bangalore",
    description:
      "Specialist in Damon Braces, Invisalign & advanced orthodontic care. Book a consultation today.",
    images: ["/images/dentist.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Suraj Naslapur",
    description:
      "Consultant Orthodontist in Bangalore specialising in Damon Braces, Invisalign, Spark Aligners, Ceramic Braces, and Myofunctional Appliances.",
    image: "https://drsurajnaslapur.com/images/dentist.jpeg",
    telephone: "+917204995169",
    email: "drsurajnaslapur@gmail.com",
    url: "https://drsurajnaslapur.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    medicalSpecialty: "Orthodontics",
    knowsAbout: [
      "Damon Braces",
      "Invisalign",
      "Spark Aligners",
      "Metal Braces",
      "Ceramic Braces",
      "Myofunctional Appliances",
      "Expansion Devices",
    ],
    openingHours: ["Mo-Sa 09:00-20:00"],
    sameAs: ["https://wa.me/916363106061"],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
