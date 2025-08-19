import Head from "next/head";
import {
  Hero,
  FeaturesBar,
  About,
  MediaGallery,
  MortgageCalculator,
  PresentedBy,
  Footer,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahakam Gate Residence</title>
        <meta
          name="description"
          content="Explore luxury residences with full details, mortgage calculator, and agent information."
        />

        {/* OpenGraph meta tags */}
        <meta property="og:title" content="Mahakam Gate Residence" />
        <meta
          property="og:description"
          content="Explore luxury residences with full details, mortgage calculator, and agent information."
        />
        <meta property="og:image" content="/images/hero.JPG" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://mahakamgateresidence.vercel.app"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mahakam Gate Residence" />
        <meta
          name="twitter:description"
          content="Explore luxury residences with full details, mortgage calculator, and agent information."
        />
        <meta name="twitter:image" content="/images/hero.JPG" />
      </Head>

      <Hero />
      <FeaturesBar />
      <main>
        <About />
        <MediaGallery />
        <MortgageCalculator />
        <PresentedBy />
      </main>
      <Footer />
    </>
  );
}
