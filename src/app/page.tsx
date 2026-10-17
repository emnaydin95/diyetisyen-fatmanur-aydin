import React from "react";
import Hero from "@/components/sections/Hero";
import BentoAbout from "@/components/sections/BentoAbout";
import Services from "@/components/sections/Services";
import ProcessSteps from "@/components/sections/ProcessSteps";
import HealthCalculator from "@/components/tools/HealthCalculator";
import Testimonials from "@/components/sections/Testimonials";
import RecipesShowcase from "@/components/sections/RecipesShowcase";
import ContactLocation from "@/components/sections/ContactLocation";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Bento Grid: About & Philosophy */}
      <BentoAbout />

      {/* 3. Services & Consultation Packages */}
      <Services />

      {/* 4. 4-Step Consultation Process */}
      <ProcessSteps />

      {/* 5. Interactive Health Tools (BMI & Water Intake) */}
      <HealthCalculator />

      {/* 6. Google Reviews & Social Proof */}
      <Testimonials />

      {/* 7. Healthy Recipes & 9:16 Instagram Reels Showcase */}
      <RecipesShowcase />

      {/* 8. Contact Form, Clinic Location & Transit Guide */}
      <ContactLocation />
    </>
  );
}
