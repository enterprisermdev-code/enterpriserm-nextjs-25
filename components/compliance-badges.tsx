const badges = [
  { label: 'ISO 27001', code: 'ISO' },
  { label: 'SOC 2 Type II', code: 'SOC2' },
  { label: 'GDPR Ready', code: 'GDPR' },
  { label: 'HIPAA', code: 'HIPAA' }
];

export function ComplianceBadges() {
  return (
    <section className="py-14 bg-white" id="compliance">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map(b => (
            <div key={b.code} className="px-6 py-3 rounded-full border border-gray-200 bg-[#f9fafc] text-sm font-medium text-gray-700 shadow-sm hover:shadow transition">
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
