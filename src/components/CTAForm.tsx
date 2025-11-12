'use client';

import { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTAForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleType: '',
    hasDocuments: '',
    name: '',
    phone: '',
    experience: ''
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - will be enhanced with Supabase in later tasks
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will call you within 24 hours.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-luzhaven-dark font-semibold mb-3">
                What are you driving?
              </label>
              <select 
                value={formData.vehicleType}
                onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-luzhaven-red focus:outline-none transition-colors"
                required
              >
                <option value="">Select your vehicle type</option>
                <option value="moto-okada">Moto/Okada</option>
                <option value="car">Car</option>
                <option value="truck-cargo-kia">Truck/Cargo/Kia</option>
              </select>
            </div>
            
            <div>
              <label className="block text-luzhaven-dark font-semibold mb-3">
                Do you have a valid driver's license, Ghana Card, and insurance?
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, hasDocuments: 'yes'})}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    formData.hasDocuments === 'yes' 
                      ? 'bg-luzhaven-red text-white border-luzhaven-red' 
                      : 'bg-white text-luzhaven-dark border-gray-300 hover:border-luzhaven-red'
                  }`}
                >
                  Yes, I have all documents
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, hasDocuments: 'no'})}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    formData.hasDocuments === 'no' 
                      ? 'bg-luzhaven-red text-white border-luzhaven-red' 
                      : 'bg-white text-luzhaven-dark border-gray-300 hover:border-luzhaven-red'
                  }`}
                >
                  No, I need help
                </button>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-luzhaven-dark font-semibold mb-3">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-luzhaven-red focus:outline-none transition-colors"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-luzhaven-dark font-semibold mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-luzhaven-red focus:outline-none transition-colors"
                placeholder="0XX XXX XXXX"
                required
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-luzhaven-dark font-semibold mb-3">
                How long have you been driving with ride-sharing apps?
              </label>
              <select 
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-luzhaven-red focus:outline-none transition-colors"
                required
              >
                <option value="">Select your experience</option>
                <option value="new">I'm new to this</option>
                <option value="less-than-year">Less than 1 year</option>
                <option value="1-2-years">1-2 years</option>
                <option value="more-than-2">More than 2 years</option>
              </select>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-luzhaven-dark mb-2">What happens next?</h4>
              <ul className="text-luzhaven-dark space-y-2 text-sm">
                <li>• We'll call you within 24 hours</li>
                <li>• Quick 10-minute qualification call</li>
                <li>• Start earning within 48 hours</li>
              </ul>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="cta-form" className="bg-white py-20 px-6" style={{ scrollMarginTop: '2rem' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luzhaven-dark mb-6">
            Ready to Start Earning More?
          </h2>
          <p className="text-lg sm:text-xl text-luzhaven-dark mb-8">
            Ready to make the switch to a partner who puts you first?
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-luzhaven-dark font-semibold">
                Your 3-Step Application
              </span>
              <span className="text-luzhaven-dark text-sm">
                Step {currentStep} of 3
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-luzhaven-red h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              {currentStep === 1 && "Qualification"}
              {currentStep === 2 && "Contact Information"}
              {currentStep === 3 && "Experience & Next Steps"}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {renderStep()}
            
            <div className="mt-8 space-y-4">
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && (!formData.vehicleType || !formData.hasDocuments)) ||
                    (currentStep === 2 && (!formData.name || !formData.phone))
                  }
                  className="w-full bg-luzhaven-red hover:bg-[#d40101] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-luzhaven-red hover:bg-[#d40101] text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              )}
              
              <div className="text-center">
                <button
                  type="button"
                  className="text-luzhaven-red hover:text-[#d40101] font-semibold inline-flex items-center space-x-2 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Or Request a Call Back</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
