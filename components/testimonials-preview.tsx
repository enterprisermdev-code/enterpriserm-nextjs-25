"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { name: 'Maria Chen', role: 'Chief Risk Officer', company: 'TechCorp', quote: 'EnterpriseRM.ai cut our assessment cycle time nearly in half and gave leadership real confidence in our risk posture.', avatar: '/avatar1.png' },
  { name: 'Dylan Hart', role: 'Security Governance Lead', company: 'SecureNet', quote: 'The automation and evidence workflows replaced three disconnected tools. Adoption was instant.', avatar: '/avatar2.png' },
  { name: 'Aisha Malik', role: 'Ops Compliance Manager', company: 'CloudSys', quote: 'Dashboards are clear, and the AI suggestions surfaced issues we would have missed.', avatar: '/avatar3.png' },
  { name: 'Priya Singh', role: 'Risk Analyst', company: 'DataFlow', quote: 'The reporting is beautiful and the team loves the workflow automation.', avatar: '/avatar4.png' },
  { name: 'James Lee', role: 'Compliance Director', company: 'FinTrust', quote: 'We passed our audit with zero findings thanks to EnterpriseRM.ai.', avatar: '/avatar5.png' },
  { name: 'Sofia Gomez', role: 'IT Risk Lead', company: 'GlobalTech', quote: 'The integrations made onboarding a breeze. Highly recommend!', avatar: '/avatar6.png' },
];

export function TestimonialsPreview() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const goToPrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => setActive((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-24 bg-linear-to-b from-white via-[#f5f6fa] to-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#e9ecff] text-[#120174] text-sm font-semibold">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted By High-Performing Teams</h2>
          <p className="text-gray-600 text-lg">Real outcomes from modern enterprises using EnterpriseRM.ai to mature their risk programs.</p>
        </div>
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-all duration-700 ease-out" 
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={t.name} className="min-w-full px-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-10 flex flex-col items-center relative overflow-hidden">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#120174] via-[#0ea5ff] to-[#120174]"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-6 left-6 text-6xl text-[#e9ecff] font-serif leading-none">"</div>
                    
                    <div className="flex flex-col items-center mt-4 mb-6">
                      <div className="h-20 w-20 rounded-full bg-linear-to-br from-[#120174] to-[#0ea5ff] p-1 mb-4 shadow-lg">
                        <div className="h-full w-full rounded-full bg-[#e1e5f9] overflow-hidden flex items-center justify-center">
                          {t.avatar ? (
                            <Image src={t.avatar} alt={t.name} width={80} height={80} className="rounded-full object-cover" />
                          ) : (
                            <span className="text-2xl font-bold text-[#120174]">{t.name.split(' ')[0][0]}</span>
                          )}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-xl mb-1">{t.name}</div>
                        <div className="text-sm text-[#120174] font-medium">{t.role}</div>
                        <div className="text-xs text-gray-500 mt-1">{t.company}</div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed text-center max-w-xl italic">
                      "{t.quote}"
                    </p>
                    
                    {/* Star rating */}
                    <div className="flex gap-1 mt-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-[#fbbf24]" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-[#120174] text-gray-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-200 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-[#120174] text-gray-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-200 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === idx ? 'w-8 bg-[#120174]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
