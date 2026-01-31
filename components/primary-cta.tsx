"use client";
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const chartData = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 52 },
  { month: 'Mar', value: 48 },
  { month: 'Apr', value: 61 },
  { month: 'May', value: 55 },
  { month: 'Jun', value: 67 },
  { month: 'Jul', value: 72 },
  { month: 'Aug', value: 65 },
  { month: 'Sep', value: 78 },
  { month: 'Oct', value: 82 },
  { month: 'Nov', value: 75 },
  { month: 'Dec', value: 88 },
];

export function PrimaryCTA() {
  return (
    <section className="py-24 bg-linear-to-r from-[#120174] via-[#2b1fa0] to-[#120174] text-white relative overflow-hidden">
      {/* Animated background graph overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ minHeight: '400px' }}>
        <ResponsiveContainer width="100%" height={360} minHeight={300}>
          <BarChart data={chartData}>
            <Bar dataKey="value" fill="white" animationDuration={2000} animationBegin={0}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`rgba(255, 255, 255, ${0.3 + (index * 0.05)})`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Content layer */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Accelerate Enterprise Risk Maturity</h2>
          <p className="text-lg opacity-90 mb-6">See how AI-driven automation reduces assessment cycles, improves reporting accuracy, and lets your team focus on strategic initiatives.</p>
          <Button className="bg-white text-[#120174] hover:bg-[#f3f3ff] font-semibold px-8 py-6 rounded-full">Request a personalized demo</Button>
        </div>
        <div className="w-full max-w-md">
          
          <div className="grid grid-cols-2 gap-6 mt-6">
            {[{label:'Avg. Time Saved',value:'42%'},{label:'Audit Readiness',value:'99%'},{label:'Workflow Automation',value:'68%'},{label:'Stakeholder Satisfaction',value:'4.8/5'}].map(stat => (
              <div key={stat.label} className="rounded-xl backdrop-blur bg-white/10 border border-white/20 p-4 text-center">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs uppercase tracking-wide opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
