import Image from 'next/image';

export function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative max-w-6xl mx-auto">
          {/* Illustration - positioned absolutely on larger screens */}
          <div className="absolute -top-12 left-8 hidden md:block">
            <div className="w-64 h-32">
              <Image 
                src="/globe.svg" 
                alt="Risk Management Illustration" 
                width={256} 
                height={128}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Mobile illustration */}
          <div className="md:hidden mb-6 flex justify-center">
            <div className="w-48 h-24">
              <Image 
                src="/globe.svg" 
                alt="Risk Management Illustration" 
                width={192} 
                height={96}
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto md:pt-8">
            <div className="inline-block px-4 py-1 mb-6 rounded bg-white border border-[#0ea5ff] text-[#0ea5ff] text-sm font-semibold">
              Why US
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don't Wait For Risk To Strike
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Risk management can no longer be reactive. Organizations that proactively anticipate, assess, and respond to risks build resilience and agility. Enterprise.AI equips your teams with the tools to identify threats early and act strategically. Shift from reactive risk mitigation to forward-thinking risk leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
