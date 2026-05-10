import { Hero } from "@/components/sections/hero";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { WhyWienCraft } from "@/components/sections/why-wiencraft";
import { Categories } from "@/components/sections/categories";
import { ProcessSection } from "@/components/sections/process-section";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTABanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyWienCraft />
      <Categories />
      <FeaturedProducts />
      <ProcessSection />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
