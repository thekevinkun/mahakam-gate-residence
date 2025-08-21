import Script from "next/script";

import { features, amenities, photos, agentInfo } from "@/utilities/constant";

export default function Schema() {
  // Map features
  const numberOfRooms = features.find((f) => f.name === "beds")?.value || 0;
  const numberOfBathroomsTotal =
    features.find((f) => f.name === "baths")?.value || 0;
  const floorSizeValue =
    features
      .find((f) => f.name === "property size")
      ?.value.replace(" m²", "") || 0;

  // Map photos to absolute URLs (important for SEO!)
  const photoUrls = photos.map(
    (p) => `https://mahakamgateresidence.vercel.app${p.src}`
  );

  // Map amenities into Schema.org LocationFeatureSpecification
  const amenityFeature = amenities.map((a) => ({
    "@type": "LocationFeatureSpecification",
    name: a,
    value: true,
  }));

  // Agent details
  const schemaAgent = {
    "@type": "Person",
    name: agentInfo.name,
    email: agentInfo.email,
    telephone: agentInfo.phone,
    jobTitle: agentInfo.details.find((d) => d.name === "Job position")?.value,
    image: `https://mahakamgateresidence.vercel.app${agentInfo.photo}`,
    worksFor: {
      "@type": "Organization",
      name: "Mahakam Gate Residence",
    },
    knowsLanguage: agentInfo.details.find((d) => d.name === "Speaks")?.value,
    license: agentInfo.details.find((d) => d.name === "License")?.value,
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Residences",
    name: "Mahakam Gate Residence",
    description:
      "Exclusive modern apartments with 2 bedrooms, 4 bathrooms, premium amenities, mortgage options, and trusted agent support.",
    url: "https://mahakamgateresidence.vercel.app",
    image: photoUrls,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anggrek Merah 3 No. 54",
      addressLocality: "Samarinda", // fill in your actual city
      addressRegion: "East Kalimantan",
      addressCountry: "ID",
    },
    numberOfRooms: numberOfRooms,
    numberOfBathroomsTotal: numberOfBathroomsTotal,
    floorSize: {
      "@type": "QuantitativeValue",
      value: floorSizeValue,
      unitCode: "MTR",
    },
    amenityFeature,
    agent: schemaAgent,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "IDR",
      price: "1800000000", // you can insert actual price if you want
      url: "https://mahakamgateresidence.vercel.app",
    },
  };

  return (
    <Script
      id="schema-residences"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2),
      }}
    />
  );
}
