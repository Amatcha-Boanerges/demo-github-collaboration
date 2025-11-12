import { PhoneOff } from 'lucide-react';

export default function Problem() {
  return (
    <section className="bg-luzhaven-dark py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 sm:mb-12">
          <PhoneOff className="h-12 w-12 sm:h-16 sm:w-16 text-luzhaven-red mx-auto mb-6 sm:mb-8" />
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 font-primary">
        Support wahala?
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto px-2">
        We understand your struggles. Calls go unanswered. We&apos;ve got your back making sure your hustle pays off.. 
          You&apos;re left to fix everything yourself. It&apos;s frustrating. It costs you money. 
          <span className="text-luzhaven-red font-semibold"> You deserve better.</span>
        </p>
      </div>
    </section>
  );
}