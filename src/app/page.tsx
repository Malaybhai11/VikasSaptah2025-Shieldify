'use client';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Logos from '@/components/Logos';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <FeatureSection />
      <Logos />
      <TeamSection />
      <Footer />
    </div>
  );
}
