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
