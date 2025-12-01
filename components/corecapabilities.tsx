"use client";

export function CoreCapabilities() {
  return (
    <section className="relative py-20 bg-linear-to-br from-[#f8f9fc] via-white to-[#f3f7ff]">
      {/* Top right SVG */}
      <div className="absolute top-0 right-0 w-56 h-44 pointer-events-none select-none opacity-80">
        <img src="/Vector_.svg" alt="Decorative vector" className="w-full h-full object-contain" />
      </div>
      {/* Bottom left SVG */}
      <div className="absolute bottom-0 left-0 w-56 h-44 pointer-events-none select-none opacity-80">
        <img src="/Vector_.svg" alt="Decorative vector" className="w-full h-full object-contain" />
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Core Capabilities</h2>
        <div className="space-y-8 max-w-2xl">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-xl text-[#120174]">1.</span>
              <span className="font-semibold text-xl text-gray-900">Risk Register</span>
            </div>
            <p className="text-gray-600 mt-2">Centralize all enterprise risks in one structured repository. Track, categorize, and monitor risks efficiently. Assign ownership and keep your teams accountable.</p>
          </div>
          <hr className="border-gray-200" />
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-xl text-[#120174]">2.</span>
              <span className="font-semibold text-xl text-gray-900">Dynamic Dashboards</span>
            </div>
            <p className="text-gray-600 mt-2">Customizable dashboards provide both executive summaries and detailed operational insights. Visualize risk trends in real time. Make informed decisions quickly.</p>
          </div>
          <hr className="border-gray-200" />
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-xl text-[#120174]">3.</span>
              <span className="font-semibold text-xl text-gray-900">Workflow Automation</span>
            </div>
            <p className="text-gray-600 mt-2">Streamline assessments, incident reporting, approvals, and follow-ups with automated workflows. Reduce manual effort and human error. Ensure timely action across teams.</p>
          </div>
          <hr className="border-gray-200" />
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-xl text-[#120174]">4.</span>
              <span className="font-semibold text-xl text-gray-900">Compliance Management</span>
            </div>
            <p className="text-gray-600 mt-2">Map each risk directly to relevant regulations, frameworks, and internal controls. Stay audit-ready with accurate evidence. Simplify reporting across the organization.</p>
          </div>
          <hr className="border-gray-200" />
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-xl text-[#120174]">5.</span>
              <span className="font-semibold text-xl text-gray-900">Audit Support</span>
            </div>
            <p className="text-gray-600 mt-2">Generate detailed, audit-ready reports with one click. Save time and ensure consistency. Demonstrate compliance and accountability effortlessly.</p>
          </div>
        </div>
        {/* Bottom right illustration (people) */}
        <div className="absolute bottom-0 right-10 w-72 h-48 pointer-events-none select-none">
          <img src="/looking.svg" alt="Team illustration" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
