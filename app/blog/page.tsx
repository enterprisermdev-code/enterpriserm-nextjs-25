import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { sanityClient, BlogPost } from "@/sanity/client";
import { queries } from "@/sanity/queries";

async function getPosts(): Promise<BlogPost[]> {
  try {
    return await sanityClient.fetch(queries.allPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="py-20 pt-32">
          <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights on enterprise risk management, compliance, and AI-driven solutions
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">No posts yet</h2>
                <p className="text-gray-600">
                  Check back soon for insights on enterprise risk management and compliance.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#120174] hover:shadow-xl transition-all duration-300"
                >
                  {post.mainImage?.asset?.url && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#120174] mb-3 line-clamp-2 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      {post.author?.name && (
                        <span className="font-medium">{post.author.name}</span>
                      )}
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      )}
                    </div>
                    {post.categories && post.categories.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-[#120174] bg-[#120174]/5 rounded-full">
                          {post.categories[0].title}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
