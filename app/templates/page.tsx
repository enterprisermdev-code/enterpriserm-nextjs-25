import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { sanityClient } from "@/sanity/client";
import { queries } from "@/sanity/queries";

type TemplateListItem = {
  _id: string;
  title: string;
  slug?: { current: string };
  excerpt?: string;
  desc?: string;
};

async function getTemplates(): Promise<TemplateListItem[]> {
  try {
    return await sanityClient.fetch(queries.allTemplates);
  } catch (e) {
    console.error("Error fetching templates:", e);
    return [];
  }
}

export default async function TemplatesIndexPage() {
  const templates = await getTemplates();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 pt-32 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-[#120174] to-[#3d2cb5] rounded-full" />
                <span className="text-sm font-bold uppercase tracking-wider text-[#120174]">Templates</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">Template Policies</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Download our FREE, customizable, ready to launch security and compliance policies.
              </p>
            </div>
          </div>
        </section>

        {/* List */}
        {templates.length === 0 ? (
          <section className="py-20">
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">No templates yet</h2>
                <p className="text-gray-600">Check back soon for policy templates.</p>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((tpl) => {
                  const href = tpl.slug?.current ? `/templates/${tpl.slug.current}` : undefined;
                  const content = (
                    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#120174] hover:shadow-lg transition-all duration-300 flex flex-col p-5">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#120174] mb-2 line-clamp-2 transition-colors">
                        {tpl.title}
                      </h3>
                      {(tpl.excerpt || tpl.desc) && (
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                          {tpl.excerpt || tpl.desc}
                        </p>
                      )}
                      <div className="mt-auto pt-3 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100">
                        <span>View template</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  );

                  return href ? (
                    <Link key={tpl._id} href={href} className="block">
                      {content}
                    </Link>
                  ) : (
                    <div key={tpl._id} className="opacity-60 cursor-not-allowed">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
