import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { sanityClient, TemplateDoc } from "@/sanity/client";
import { queries } from "@/sanity/queries";
import { PortableTextRenderer } from "@/components/portable-text";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PopupContact } from "@/components/popup_contact";

async function getTemplate(slug: string): Promise<TemplateDoc | null> {
  try {
    return await sanityClient.fetch(queries.templateBySlug, { slug });
  } catch (e) {
    console.error("Error fetching template:", e);
    return null;
  }
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = await getTemplate(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-8 md:py-12 border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#120174] hover:gap-3 transition-all font-semibold text-xs md:text-sm mb-6 md:mb-8"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {doc.title}
            </h1>

            {(doc.excerpt || doc.desc) && (
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {doc.excerpt || doc.desc}
              </p>
            )}

            <div className="mt-6">
              <PopupContact
                triggerLabel="Download the free template"
                redirectUrl={doc.templateDocPath || undefined}
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div
              className="prose prose-sm md:prose-base lg:prose-lg max-w-none prose-headings:font-bold prose-a:text-[#120174] hover:prose-a:text-[#0d0050] prose-a:transition-colors"
            >
              <PortableTextRenderer content={doc.body} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const items: Array<{ _id: string; title: string; slug?: { current: string } }> =
      await sanityClient.fetch(queries.allTemplates);
    return items
      .filter((t) => Boolean(t.slug?.current))
      .map((t) => ({ slug: t.slug!.current as string }));
  } catch (e) {
    console.error("Error generating template params:", e);
    return [];
  }
}
