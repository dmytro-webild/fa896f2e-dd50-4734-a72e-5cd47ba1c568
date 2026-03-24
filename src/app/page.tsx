"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Car, Droplets, Package, Sparkles, SprayCan, Lightbulb, PiggyBank } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "home"},
        {
          name: "Services",          id: "services"},
        {
          name: "Why Choose Us",          id: "why-choose-us"},
        {
          name: "Results",          id: "transformation"},
        {
          name: "Pricing",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Carvo Auto Care"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogo
      logoText="Carvo Auto Care"
      description="Transform Your Ride with Premium Mobile Detailing. We Come To You, Delivering Instant, Showroom-Ready Results!"
      buttons={[
        {
          text: "Book Now",          href: "#contact"},
        {
          text: "Call Now",          href: "tel:+17202779151"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/guy-rinsing-auto-car-wash-with-water-gun_651396-2789.jpg"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Jessica L.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-woman_23-2148603029.jpg",          imageAlt: "Jessica L. - Carvo Auto Care Customer"},
        {
          id: "2",          name: "Mark D.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-posing-outdoors_23-2149073989.jpg",          imageAlt: "Mark D. - Carvo Auto Care Customer"},
        {
          id: "3",          name: "Sarah P.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-adult-daughter-mature-father-meeting-with-family-consultant-co-working-shaking-hands_74855-15154.jpg",          imageAlt: "Sarah P. - Carvo Auto Care Customer"},
        {
          id: "4",          name: "David M.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-african-american-man-home_23-2148854234.jpg",          imageAlt: "David M. - Carvo Auto Care Customer"},
      ]}
      cardTitle="Our Customers Love Us! 5.0 Star Google Rating"
      cardTag="Trusted by Locals"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "interior-detail",          title: "Interior Detail",          description: "Deep cleaning and conditioning for a fresh, hygienic cabin. Removes dirt, stains, and odors, restoring your interior to like-new condition.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/luggage-seen-from-rear-car-window_23-2150934355.jpg"},
          items: [
            {
              icon: Car,
              text: "Vacuum & Shampoo"},
            {
              icon: SprayCan,
              text: "Surface Wipedown"},
          ],
          reverse: false,
        },
        {
          id: "exterior-detail",          title: "Exterior Detail",          description: "Thorough wash, wax, and tire dressing for a dazzling shine. Protects paint and leaves your vehicle looking immaculate.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/man-polish-car-garage_1157-26067.jpg"},
          items: [
            {
              icon: Sparkles,
              text: "Hand Wash & Wax"},
            {
              icon: Droplets,
              text: "Tire & Rim Shine"},
          ],
          reverse: true,
        },
        {
          id: "full-detail",          title: "Full Detail",          description: "Our most popular package, combining interior and exterior services for a complete vehicle transformation, inside and out.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/guy-rinsing-auto-car-wash-with-water-gun_651396-2789.jpg"},
          items: [
            {
              icon: Award,
              text: "Comprehensive Cleaning"},
            {
              icon: Package,
              text: "Best Value"},
          ],
          reverse: false,
        },
        {
          id: "headlight-restoration",          title: "Headlight Restoration",          description: "Restore clarity and brightness to foggy headlights, improving visibility and enhancing your vehicle's appearance. Save money vs. replacement!",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/headlight-lamp-car_1339-3036.jpg"},
          items: [
            {
              icon: Lightbulb,
              text: "Improved Visibility"},
            {
              icon: PiggyBank,
              text: "Cost-Effective"},
          ],
          reverse: true,
        },
      ]}
      title="Our Premium Detailing Services"
      description="Experience unparalleled convenience and meticulous care with our comprehensive range of mobile auto detailing services, all brought right to your door for a showroom-ready finish."
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <MediaAbout
      useInvertedBackground={true}
      title="Why Choose Carvo Auto Care?"
      description="Experience the ultimate convenience of professional auto detailing brought directly to your location. We pride ourselves on fast turnarounds, with many jobs completed in under an hour, all while maintaining an unparalleled attention to detail that sets us apart. Join our growing list of trusted, satisfied local customers."
      imageSrc="http://img.b2bpic.net/free-photo/professional-female-driver-with-van-wagon-car_23-2150248837.jpg"
      imageAlt="Carvo Auto Care mobile detailing van"
    />
  </div>

  <div id="transformation" data-section="transformation">
      <ProductCardFour
      animationType="opacity"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "interior-transform",          name: "Interior Reimagined",          price: "Like-New Feel",          variant: "Deep Clean",          imageSrc: "http://img.b2bpic.net/free-photo/luggage-seen-from-rear-car-window_23-2150934355.jpg",          imageAlt: "Immaculate car interior after detailing"},
        {
          id: "exterior-transform",          name: "Exterior Brilliance",          price: "Showroom Shine",          variant: "Paint Protection",          imageSrc: "http://img.b2bpic.net/free-photo/man-polish-car-garage_1157-26067.jpg",          imageAlt: "Glossy car exterior after detailing"},
        {
          id: "headlight-transform",          name: "Headlight Clarity",          price: "Enhanced Safety",          variant: "Restored Visibility",          imageSrc: "http://img.b2bpic.net/free-photo/headlight-lamp-car_1339-3036.jpg",          imageAlt: "Clear, restored car headlight"},
      ]}
      title="Witness the Carvo Transformation"
      description="From daily grime to showroom shine – see how Carvo Auto Care meticulously restores your vehicle to its like-new glory, enhancing its appearance and protecting its value."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "interior",          tag: "Popular",          price: "$99",          period: "starting at",          description: "Ideal for a spotless and sanitized cabin.",          button: {
            text: "Book Interior",            href: "#contact"},
          featuresTitle: "Includes:",          features: [
            "Deep vacuum & shampoo",            "Surface wipe-down",            "Glass cleaning",            "Air freshener"],
        },
        {
          id: "full",          tag: "Best Value",          price: "$159",          period: "starting at",          description: "The ultimate full vehicle transformation.",          button: {
            text: "Book Full Detail",            href: "#contact"},
          featuresTitle: "Includes:",          features: [
            "Complete Interior Detail",            "Thorough Exterior Wash & Wax",            "Tire & rim dressing",            "Paint sealant application"],
        },
        {
          id: "headlight",          tag: "Restore & Save",          price: "$100",          period: "per pair",          description: "Restore clarity and save on replacement costs.",          button: {
            text: "Book Restoration",            href: "#contact"},
          featuresTitle: "Benefits:",          features: [
            "Improved nighttime visibility",            "Enhanced vehicle aesthetics",            "UV protection applied",            "Significant savings vs. new headlights"],
        },
      ]}
      title="Transparent Pricing, Exceptional Value"
      description="Select the perfect detailing package for your vehicle. Each plan is designed to deliver premium results and outstanding value, right at your doorstep with no hidden fees."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Limited Weekly Availability!"
      title="Ready for a Spotless Shine?"
      description="Our schedule fills up fast due to high demand for premium mobile detailing. Contact us now for same-day appointments when available, or to reserve your spot. Call Carvo Auto Care directly: (720) 277-9151. We're open 24 hours and proudly serve Aurora and nearby areas."
      buttons={[
        {
          text: "Call Now (720) 277-9151",          href: "tel:+17202779151"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Interior Detail",              href: "#services"},
            {
              label: "Exterior Detail",              href: "#services"},
            {
              label: "Full Detail",              href: "#services"},
            {
              label: "Headlight Restoration",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "Why Choose Us",              href: "#why-choose-us"},
            {
              label: "Our Results",              href: "#transformation"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Contact Us",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="Carvo Auto Care"
      copyrightText="© 2024 Carvo Auto Care. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
