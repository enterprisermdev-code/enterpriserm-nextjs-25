import { FiShield, FiZap, FiSettings, FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

export function WhyEnterAI() {
  return (
    <section className="bg-[#f8f7fa] py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Why EnterpriseRM?</h2>
          <p className="text-xl text-gray-700 max-w-xl mb-6 leading-relaxed">
            Eliminate friction throughout your security program. The EnterpriseRM Platform acts as your operating system for your security program, helping you manage your risk and compliance with minimal friction.
          </p>
          <div className="flex items-center gap-3 text-[#120174]">
            <HiOutlineSparkles className="text-2xl" />
            <span className="font-semibold text-lg">60-80% reduction in manual effort</span>
          </div>
        </div>
        {/* Right Side */}
        <div className="space-y-8">
          <div className="group flex items-start gap-6 hover:bg-white hover:p-6 hover:rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="bg-white rounded-xl shadow-md p-4 group-hover:shadow-xl transition-shadow duration-300">
              <FiShield className="text-[#120174] text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1200+ Common Controls</h3>
              <p className="text-gray-600 mb-2">Prebuilt mapping across different frameworks - NIST CSF, GDPR, HIPAA, SOC 1 & 2, ISO 27001</p>
              <p className="text-sm text-[#120174] font-medium">Build your security program with pre-built control sets</p>
            </div>
          </div>
          
          <div className="group flex items-start gap-6 hover:bg-white hover:p-6 hover:rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="bg-white rounded-xl shadow-md p-4 group-hover:shadow-xl transition-shadow duration-300">
              <FiZap className="text-[#120174] text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Integration</h3>
              <p className="text-gray-600 mb-2">Plug into your tech stack with seamless integrations and expert-driven gap assessment</p>
              <p className="text-sm text-[#120174] font-medium">Save up to 20 hours of effort upfront in scoping</p>
            </div>
          </div>
          
          <div className="group flex items-start gap-6 hover:bg-white hover:p-6 hover:rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="bg-white rounded-xl shadow-md p-4 group-hover:shadow-xl transition-shadow duration-300">
              <FiSettings className="text-[#120174] text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Automation & Workflow</h3>
              <p className="text-gray-600 mb-2">Automate evidence collection and flag deviations with continuous control monitoring</p>
              <p className="text-sm text-[#120174] font-medium">Achieve 24/7 audit readiness with intelligent workflows</p>
            </div>
          </div>
          
          <div className="group flex items-start gap-6 hover:bg-white hover:p-6 hover:rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="bg-white rounded-xl shadow-md p-4 group-hover:shadow-xl transition-shadow duration-300">
              <FiTrendingUp className="text-[#120174] text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Scalable Support</h3>
              <p className="text-gray-600 mb-2">Flexible pricing that scales with your business plus dedicated Customer Success Manager</p>
              <p className="text-sm text-[#120174] font-medium">Expert InfoSec consultant from Day 1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
