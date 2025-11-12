import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "Luzhaven is the best because whenever I call them, I get them when there's any problem. The other ones, when you call them, they don't pick your call.",
      name: "Kwame Asante",
      duration: "2 years with Luzhaven",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      quote: "The bonuses are real, the support is real. I've earned more in 6 months here than I did in 2 years with my previous partner.",
      name: "Ama Osei",
      duration: "8 months with Luzhaven",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      quote: "They actually care about us drivers. When I had car trouble, they helped me get back on the road the same day.",
      name: "Samuel Mensah",
      duration: "1 year with Luzhaven",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80"
    }
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-luzhaven-dark mb-4 sm:mb-6 font-primary">
            Proof. Not Promises.
          </h2>
          <div className="flex justify-center items-center space-x-1 mb-6 sm:mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-luzhaven-red fill-current" />
            ))}
            <span className="ml-2 sm:ml-3 text-luzhaven-dark font-semibold text-sm sm:text-base">4.9/5 Driver Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-luzhaven-red mb-4 sm:mb-6" />
              
              <blockquote className="text-luzhaven-dark text-base sm:text-lg italic mb-4 sm:mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center">
                <Image 
                  src={testimonial.image}
                  alt={`${testimonial.name} - Luzhaven driver`}
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  quality={80}
                  sizes="(max-width: 640px) 40px, 48px"
                />
                <div>
                  <div className="font-bold text-luzhaven-dark text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.duration}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-luzhaven-dark text-center mb-6 sm:mb-8">
            Our Drivers with Their Rewards
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=300&q=80",
              "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=400&h=300&q=80",
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=300&q=80",
              "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=400&h=300&q=80"
            ].map((image, index) => (
              <Image 
                key={index}
                src={image}
                alt={`Luzhaven driver with their reward - brand new appliances and electronics ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-32 sm:h-40 object-cover"
                quality={80}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}