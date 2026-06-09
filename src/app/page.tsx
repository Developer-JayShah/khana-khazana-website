import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import FeaturedItems from "@/components/sections/featured-items";
import CateringHighlight from "@/components/sections/catering-highlight";
import MenuCategoriesPreview from "@/components/sections/menu-categories-preview";
import AboutPreview from "@/components/sections/about-preview";
import TestimonialsPreview from "@/components/sections/testimonials-preview";
import BlogPreview from "@/components/sections/blog-preview";
import ContactLocation from "@/components/sections/contact-location";
import FinalCTA from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedItems />
      <CateringHighlight />
      <MenuCategoriesPreview />
      <AboutPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <ContactLocation />
      <FinalCTA />
    </>
  );
}