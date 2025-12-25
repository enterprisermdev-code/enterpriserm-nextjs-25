import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { sanityClient, BlogPost } from "@/sanity/client";
import { queries } from "@/sanity/queries";
import { PortableTextRenderer } from "@/components/portable-text";

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    return await sanityClient.fetch(queries.postBySlug, { slug });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-8 md:py-12 border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Link
              href="/blog"
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
              <span>Back to Blog</span>
            </Link>

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="inline-block px-2.5 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#120174] bg-[#120174]/10 rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-col gap-4 md:gap-6 pb-6 md:pb-8">
              {post.author?.name && (
                <div className="flex items-center gap-3">
                  {post.author.image?.asset?.url && (
                    <Image
                      src={post.author.image.asset.url}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full ring-2 ring-gray-100 flex-shrink-0"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm md:text-base truncate">{post.author.name}</p>
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt} className="text-xs md:text-sm text-gray-500 block">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    )}
                  </div>
                </div>
              )}
            </div>

            {post.excerpt && (
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                {post.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* Cover Image */}
        {post.mainImage?.asset?.url && (
          <section className="py-6 md:py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
              <div className="relative w-full aspect-[1200/628] rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl bg-gray-50">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1080px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none 
              prose-headings:font-bold 
              prose-h1:text-2xl md:prose-h1:text-4xl 
              prose-h2:text-xl md:prose-h2:text-3xl 
              prose-h3:text-lg md:prose-h3:text-2xl 
              prose-p:leading-relaxed 
              prose-p:text-sm md:prose-p:text-base
              prose-a:text-[#120174] 
              hover:prose-a:text-[#0d0050] 
              prose-a:transition-colors
              prose-li:text-sm md:prose-li:text-base
              prose-blockquote:border-[#120174]
              prose-code:text-xs md:prose-code:text-sm
            ">
              <PortableTextRenderer content={post.body} />
            </div>

            {/* Back to Blog CTA */}
            <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#120174] mb-2">Continue Reading</h3>
                  <p className="text-sm md:text-base text-gray-600">Explore more insights on GRC and enterprise risk management</p>
                </div>
                <Link
                  href="/blog"
                  className="w-full md:w-auto inline-flex items-center justify-center px-5 md:px-6 py-3 md:py-3 bg-[#120174] text-white rounded-full hover:bg-[#0d0050] active:scale-95 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex-shrink-0 text-sm md:text-base touch-manipulation"
                >
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}

// Generate static params for all posts
export async function generateStaticParams() {
  try {
    const posts: BlogPost[] = await sanityClient.fetch(queries.allPosts);
    return posts.map((post) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
