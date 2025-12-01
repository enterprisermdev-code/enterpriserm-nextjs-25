import Link from 'next/link';

export type MenuItem = {
  title: string;
  href: string;
};

const solutions: MenuItem[] = [
  {
    title: 'Enterprise GRC',
    href: '/solutions/enterprise-grc',
  },
  {
    title: 'Integrated Risk Management',
    href: '/solutions/integrated-risk-management',
  },
  {
    title: 'Cybersecurity Risk Management',
    href: '/solutions/cybersecurity-risk',
  },
  {
    title: 'Corporate Compliance',
    href: '/solutions/corporate-compliance',
  },
  {
    title: 'Supplier Risk and Performance',
    href: '/solutions/supplier-risk',
  },
  {
    title: 'DORA',
    href: '/solutions/dora',
  },
  {
    title: 'UK SOX Compliance',
    href: '/solutions/uk-sox',
  },
  {
    title: 'Privacy Compliance',
    href: '/solutions/privacy-compliance',
  },
  {
    title: 'IDW PS 340 n.F.',
    href: '/solutions/idw-ps-340',
  },
];

const frameworks: MenuItem[] = [
  {
    title: 'CCPA',
    href: '/frameworks/ccpa',
  },
  {
    title: 'CMMC',
    href: '/frameworks/cmmc',
  },
  {
    title: 'COSO',
    href: '/frameworks/coso',
  },
  {
    title: 'HIPAA',
    href: '/frameworks/hipaa',
  },
  {
    title: 'ISO',
    href: '/frameworks/iso',
  },
  {
    title: 'NIST',
    href: '/frameworks/nist',
  },
  {
    title: 'PCI DSS',
    href: '/frameworks/pci-dss',
  },
];

const industries: MenuItem[] = [
  {
    title: 'Banking and Financial Services',
    href: '/industries/banking',
  },
  {
    title: 'Energy',
    href: '/industries/energy',
  },
  {
    title: 'Healthcare',
    href: '/industries/healthcare',
  },
  {
    title: 'Insurance',
    href: '/industries/insurance',
  },
  {
    title: 'Life Sciences',
    href: '/industries/life-sciences',
  },
  {
    title: 'Technology',
    href: '/industries/technology',
  },
  {
    title: 'Telecom',
    href: '/industries/telecom',
  },
  {
    title: 'Utilities',
    href: '/industries/utilities',
  },
];

export const menuSections: { title: string; items: MenuItem[] }[] = [
  { title: 'Product Solutions', items: solutions },
  { title: 'Frameworks', items: frameworks },
  { title: 'Industries', items: industries },
];

export function MegaMenu({ open }: { open: boolean }) {
  return (
    <div
      className={`absolute left-1/2 top-full mt-1.5 w-[90vw] max-w-5xl -translate-x-1/2 rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-200 origin-top ${
        open
          ? 'pointer-events-auto scale-100 opacity-100'
          : 'pointer-events-none scale-95 opacity-0'
      }`}
      role="menu"
      aria-hidden={!open}
    >
      <div className="mx-auto max-w-4xl px-4 py-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#120174]">
                {section.title}
              </h3>
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-2 py-1 text-[13px] text-gray-700 transition-all duration-150 hover:bg-[#f8f7fa] hover:text-[#120174] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#120174] focus-visible:ring-offset-2"
                    >
                      <span className="font-medium leading-5">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
