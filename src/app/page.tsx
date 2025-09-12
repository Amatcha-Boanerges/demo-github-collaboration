import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Benefits from '@/components/Benefits';
import SocialProof from '@/components/SocialProof';
import CTAForm from '@/components/CTAForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Benefits />
      <SocialProof />
      <CTAForm />
      <Footer />
    </div>
  );
}
