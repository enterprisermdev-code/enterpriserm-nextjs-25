"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-linear-to-br from-[#DFE0E0] via-[#DFE0E0] to-[#c9fefe]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Enterprise Risk Management Software
                
            </h1>
            
            <p className="text-lg text-gray-700 max-w-xl">
              Automate your compliance journey with our enterprise risk management software. 
              Reduce risk assessment time by 89% and ensure continuous compliance with SOC 2, ISO 27001, HIPAA, and more using our AI-driven GRC platform.
            </p>
            
            <div>
                <a href="/contact">
                <Button className="bg-[#120174] hover:bg-[#0d0050] text-white text-lg px-8 py-6 rounded-full">
                  Request a demo
                </Button>
                </a>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="relative flex items-center justify-center">
            <Image 
              src="/homebannersideimage.svg" 
              alt="Team collaboration illustration" 
              width={350} 
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
