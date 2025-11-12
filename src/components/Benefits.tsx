import { DollarSign, Headphones, Gift } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Boost Your Earnings",
      description: "Earn up to 12,000 GHS a month with top bonuses for hitting your goals."
    },
    {
      icon: Headphones,
      title: "Real, Live Support",
      description: "Get instant help via phone or WhatsApp. We pick your calls and solve your problems."
    },
    {
      icon: Gift,
      title: "Tangible Rewards",
      description: "We hand out real gifts, like brand-new appliances and electronics, to our top drivers."
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luzhaven-dark mb-6">
            Your Earning. Your Team. Your Way.
          </h2>
          <p className="text-lg sm:text-xl text-luzhaven-dark max-w-3xl mx-auto leading-relaxed">
            We are the top-rated Yango partner. Our mission is simple: get you paid, 
            and get you home safe. We provide the support and rewards other partners won't.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-luzhaven-red rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-opacity-90 transition-all duration-300">
                  <Icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-luzhaven-dark mb-4">
                  {benefit.title}
                </h3>
                <p className="text-luzhaven-dark leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Driver Image */}
        <div className="text-center">
          <img 
            src="https://images.pexels.com/photos/5849906/pexels-photo-5849906.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
            alt="Happy Luzhaven drivers"
            className="rounded-lg shadow-xl max-w-2xl mx-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
