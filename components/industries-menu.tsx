import Link from 'next/link';
import { Sparkles, Shield, Building2, Heart, Landmark, Zap, Laptop, Phone, Factory, Sprout, Car, FlaskConical, Package, GraduationCap, Wrench, BookOpen, Truck, Film, Hammer, Flame, Banknote, ShoppingBag, Cpu, Plane, Recycle } from 'lucide-react';

export type IndustryItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

export const industries: IndustryItem[] = [
  { title: 'Aerospace & Defense', href: '/industries/aerospace-defense', icon: <Landmark className="w-4 h-4" /> },
  { title: 'Agriculture', href: '/industries/agriculture', icon: <Sprout className="w-4 h-4" /> },
  { title: 'Automotive', href: '/industries/automotive', icon: <Car className="w-4 h-4" /> },
  { title: 'Chemical Manufacturing', href: '/industries/chemical-manufacturing', icon: <FlaskConical className="w-4 h-4" /> },
  { title: 'Communication Services', href: '/industries/communication-services', icon: <Phone className="w-4 h-4" /> },
  { title: 'Consumer Packaged Goods', href: '/industries/consumer-packaged-goods', icon: <Package className="w-4 h-4" /> },
  { title: 'Education', href: '/industries/education', icon: <GraduationCap className="w-4 h-4" /> },
  { title: 'Engineering Procurement & Construction', href: '/industries/engineering-procurement-construction', icon: <Wrench className="w-4 h-4" /> },
  { title: 'Financial Services', href: '/industries/financial-services', icon: <Landmark className="w-4 h-4" /> },
  { title: 'Healthcare', href: '/industries/healthcare', icon: <Heart className="w-4 h-4" /> },
  { title: 'High Technology', href: '/industries/high-technology', icon: <Laptop className="w-4 h-4" /> },
  { title: 'Industrial Manufacturing', href: '/industries/industrial-manufacturing', icon: <Factory className="w-4 h-4" /> },
  { title: 'Information Technology', href: '/industries/it', icon: <BookOpen className="w-4 h-4" /> },
  { title: 'Insurance', href: '/industries/insurance', icon: <Shield className="w-4 h-4" /> },
  { title: 'Life Sciences', href: '/industries/life-sciences', icon: <FlaskConical className="w-4 h-4" /> },
  { title: 'Logistics & Distribution', href: '/industries/logistics-distribution', icon: <Truck className="w-4 h-4" /> },
  { title: 'Media and Entertainment', href: '/industries/media-entertainment', icon: <Film className="w-4 h-4" /> },
  { title: 'Mining', href: '/industries/mining', icon: <Hammer className="w-4 h-4" /> },
  { title: 'Oil and Gas', href: '/industries/oil-gas', icon: <Flame className="w-4 h-4" /> },
  { title: 'Private Equity', href: '/industries/private-equity', icon: <Banknote className="w-4 h-4" /> },
  { title: 'Professional Services', href: '/industries/professional-services', icon: <Zap className="w-4 h-4" /> },
  { title: 'Public Sector', href: '/industries/public-sector', icon: <Building2 className="w-4 h-4" /> },
  { title: 'Retail', href: '/industries/retail', icon: <ShoppingBag className="w-4 h-4" /> },
  { title: 'Semiconductor', href: '/industries/semiconductor', icon: <Cpu className="w-4 h-4" /> },
  { title: 'Travel and Hospitality', href: '/industries/travel-hospitality', icon: <Plane className="w-4 h-4" /> },
  { title: 'Utilities', href: '/industries/utilities', icon: <Factory className="w-4 h-4" /> },
  { title: 'Waste Management', href: '/industries/waste-management', icon: <Recycle className="w-4 h-4" /> },
];

export function IndustriesMenu({ open }: { open: boolean }) {
  return (
    <div
      className={`fixed left-0 right-0 top-[70px] mt-3 mx-auto w-[92vw] max-w-5xl rounded-2xl border border-gray-200/50 bg-white/98 backdrop-blur-xl shadow-2xl transition-all duration-300 origin-top ${
        open
          ? 'pointer-events-auto scale-100 opacity-100 translate-y-0'
          : 'pointer-events-none scale-95 opacity-0 -translate-y-4'
      }`}
      role="menu"
      aria-hidden={!open}
    >
      <div className="px-6 py-5 max-h-[75vh] overflow-y-auto">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-0.5 w-8 rounded-full bg-linear-to-r from-[#120174] to-[#3d2cb5]"></div>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#120174]">
            Industries We Serve
          </h3>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1">
          {industries.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block rounded-lg px-3 py-2 transition-all duration-200 hover:bg-linear-to-r hover:from-[#f8f7fa] hover:to-white hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#120174] focus-visible:ring-offset-2"
              >
                <div className="flex items-center gap-2.5">
                  {item.icon && (
                    <div className="text-[#120174] opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
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
    </div>
  );
}
