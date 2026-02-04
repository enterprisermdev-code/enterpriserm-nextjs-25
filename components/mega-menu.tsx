import Link from 'next/link';
import { Sparkles, Shield, Building2, FileCheck, Users, Lock } from 'lucide-react';

export type MenuItem = {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
};

const solutions: MenuItem[] = [
  {
    title: 'Enterprise GRC',
    href: '/industries/fintech',
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    title: 'Integrated Risk Management',
    href: '/industries/healthcare',
    icon: <Shield className="w-4 h-4" />,
  },
  {
    title: 'Cybersecurity Risk Management',
    href: '/industries/it',
    icon: <Lock className="w-4 h-4" />,
  },
  {
    title: 'Corporate Compliance',
    href: '/industries/fintech',
    icon: <FileCheck className="w-4 h-4" />,
  },
  {
    title: 'Supplier Risk and Performance',
    href: '/industries/fintech',
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: 'DORA',
    href: '/industries/healthcare',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    title: 'UK SOX Compliance',
    href: '/industries/healthcare',
    icon: <FileCheck className="w-4 h-4" />,
  },
  {
    title: 'Privacy Compliance',
    href: '/industries/healthcare',
    icon: <Shield className="w-4 h-4" />,
  },
  {
    title: 'IDW PS 340 n.F.',
    href: '/industries/fintech',
    icon: <FileCheck className="w-4 h-4" />,
  },
];

const frameworks: MenuItem[] = [
   {
    title: 'ISO 27001',
    href: '/solutions/frameworks/iso-27001',
  },
  {
    title: 'NIST',
    href: '/solutions/frameworks/nist',
  },
  {
    title: 'PCI DSS',
    href: '/solutions/frameworks/pci-dss',
  },
  {
    title: 'GDPR',
    href: '/solutions/frameworks/gdpr',
  },
  {
    title: 'SOC 2',
    href: '/solutions/frameworks/soc-2',
  },
  {
    title: 'AMLA',
    href: '/solutions/frameworks/amla',
  },
];

export const menuSections: { title: string; items: MenuItem[] }[] = [
  { title: 'Product Solutions', items: solutions },
  { title: 'Frameworks', items: frameworks },
];

export function MegaMenu({ open }: { open: boolean }) {
  return (
    <div
      className={`fixed left-0 right-0 top-[70px] mt-3 mx-auto w-[92vw] max-w-4xl rounded-2xl border border-gray-200/50 bg-white/98 backdrop-blur-xl shadow-2xl transition-all duration-300 origin-top ${
        open
          ? 'pointer-events-auto scale-100 opacity-100 translate-y-0'
          : 'pointer-events-none scale-95 opacity-0 -translate-y-4'
      }`}
      role="menu"
      aria-hidden={!open}
    >
      <div className="px-6 py-5 max-h-[75vh] overflow-y-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {menuSections.map((section, sectionIdx) => (
            <div key={section.title} className={sectionIdx < menuSections.length - 1 ? 'md:border-r border-gray-200/60 md:pr-6' : ''}>
              <div className="mb-3 flex items-center gap-2">
                <div className="h-0.5 w-6 rounded-full bg-gradient-to-r from-[#120174] to-[#3d2cb5]"></div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#120174]">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="group block rounded-lg px-3 py-2 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#f8f7fa] hover:to-white hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#120174] focus-visible:ring-offset-2"
                    >
                      <div className="flex items-center gap-2.5">
                        {item.icon && (
                          <div className="text-[#120174] opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0">
                            {item.icon}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-[13px] text-gray-900 group-hover:text-[#120174] transition-colors leading-snug">
                            {item.title}
                          </div>
                        </div>
                      </div>
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
