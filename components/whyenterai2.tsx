import { FiPieChart } from 'react-icons/fi';
import { FaRegClock, FaRegCheckCircle } from 'react-icons/fa';
import { PiFlowArrowBold } from 'react-icons/pi';

export function WhyEnterAI() {
  return (
    <section className="bg-[#f8f7fa] py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Why Choose Enterprise.AI?</h2>
          <p className="text-base text-gray-900 max-w-xl">
            Enterprise.AI empowers organizations to manage all types of enterprise risks in one unified platform with clarity and precision. From real-time insights to seamless collaboration and regulatory compliance, it helps your teams act smarter, faster, and more confidently.
          </p>
        </div>
        {/* Right Side */}
        <div className="space-y-10">
          <div className="flex items-start gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <FiPieChart className="text-[#120174] text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Unified Risk View</h3>
              <p className="text-gray-500">Get complete visibility by consolidating all risks into one platform.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <FaRegClock className="text-[#120174] text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Prioritization</h3>
              <p className="text-gray-500">Focus on the most critical risks with real-time scoring and heat maps.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <PiFlowArrowBold className="text-[#120174] text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Seamless Collaboration</h3>
              <p className="text-gray-500">Keep teams aligned with workflows, alerts, and smooth communication.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <FaRegCheckCircle className="text-[#120174] text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Regulatory Ready</h3>
              <p className="text-gray-500">Stay audit-ready with built-in compliance mapping across global standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
