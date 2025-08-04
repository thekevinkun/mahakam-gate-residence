import {
  Hero,
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
