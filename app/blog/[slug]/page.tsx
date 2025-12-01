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
      
      <article className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#120174] hover:underline font-medium mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="inline-block px-3 py-1 text-sm font-medium text-[#120174] bg-[#120174]/5 rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            {post.author?.name && (
              <div className="flex items-center gap-3">
                {post.author.image?.asset?.url && (
                  <Image
                    src={post.author.image.asset.url}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium text-gray-900">
                  {post.author.name}
                </span>
              </div>
            )}
            {post.publishedAt && (
              <time dateTime={post.publishedAt} className="text-sm">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            )}
          </div>

          {post.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Cover Image */}
      {post.mainImage?.asset?.url && (
        <section className="container mx-auto px-6 max-w-5xl -mt-8 mb-12">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="container mx-auto px-6 max-w-3xl pb-20">
        <div className="prose prose-lg max-w-none">
          <PortableTextRenderer content={post.body} />
        </div>

        {/* Back to Blog CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#120174] text-white rounded-full hover:bg-[#0d0050] transition-colors font-medium"
          >
            Read More Articles
          </Link>
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
