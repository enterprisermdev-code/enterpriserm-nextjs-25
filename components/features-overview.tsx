import { FaShieldAlt, FaRobot, FaChartLine, FaUsersCog, FaBell, FaDatabase } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt className="text-[#120174] text-2xl" />, title: 'Risk Assessment', desc: 'Automated identification and scoring of emerging risks.' },
  { icon: <FaRobot className="text-[#120174] text-2xl" />, title: 'AI Insights', desc: 'Predictive analytics to surface patterns and anomalies.' },
  { icon: <FaChartLine className="text-[#120174] text-2xl" />, title: 'Real-Time Dashboards', desc: 'Unified visibility across teams, assets, and timelines.' },
  { icon: <FaUsersCog className="text-[#120174] text-2xl" />, title: 'Workflow Engine', desc: 'Assign owners, SLAs, and automate remediation tasks.' },
  { icon: <FaBell className="text-[#120174] text-2xl" />, title: 'Proactive Alerts', desc: 'Threshold & intelligence-driven notifications.' },
  { icon: <FaDatabase className="text-[#120174] text-2xl" />, title: 'Unified Data Layer', desc: 'Secure repository for risk artifacts & evidence.' },
];

export function FeaturesOverview() {
  return (
    <section className="py-20 bg-[#f9f9fb]" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Purpose-Built For Modern Risk Teams</h2>
          <p className="text-gray-600 text-lg">Everything you need to move faster, stay compliant, and reduce uncertainty—packaged in one platform</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#e9ecff] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
