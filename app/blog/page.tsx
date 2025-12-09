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
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 pt-32 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-[#120174] to-[#3d2cb5] rounded-full"></div>
                <span className="text-sm font-bold uppercase tracking-wider text-[#120174]">Our Insights</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">Enterprise Risk Insights</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay ahead with our latest GRC insights, compliance strategies, and industry best practices designed to help you win the boardroom.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        {posts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-0.5 w-6 rounded-full bg-gradient-to-r from-[#120174] to-[#3d2cb5]"></div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#120174]">Top Picks</h2>
              </div>
              <p className="text-sm text-gray-600 mb-8">Get our best GRC insights, curated to help you win the boardroom.</p>
              
              {featuredPost && (
                <Link
                  href={`/blog/${featuredPost.slug.current}`}
                  className="group block mb-12"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Featured Image */}
                    {featuredPost.mainImage?.asset?.url && (
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={featuredPost.mainImage.asset.url}
                          alt={featuredPost.mainImage.alt || featuredPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    {/* Featured Content */}
                    <div className="flex flex-col justify-center">
                      {featuredPost.categories && featuredPost.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {featuredPost.categories.map((category) => (
                            <span
                              key={category._id}
                              className="inline-block px-3 py-1 text-xs font-semibold text-[#120174] bg-[#120174]/10 rounded-full"
                            >
                              {category.title}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#120174] transition-colors leading-tight">
                        {featuredPost.title}
                      </h3>
                      {featuredPost.excerpt && (
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                        {featuredPost.author?.image?.asset?.url && (
                          <Image
                            src={featuredPost.author.image.asset.url}
                            alt={featuredPost.author.name || 'Author'}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        )}
                        <div>
                          {featuredPost.author?.name && (
                            <p className="font-semibold text-gray-900">{featuredPost.author.name}</p>
                          )}
                          {featuredPost.publishedAt && (
                            <time dateTime={featuredPost.publishedAt} className="text-sm text-gray-500">
                              {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </time>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </section>
        )}

        {/* All Articles Section */}
        {posts.length === 0 ? (
          <section className="py-20">
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
          </section>
        ) : remainingPosts.length > 0 ? (
          <section className="py-16 border-t border-gray-200">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-0.5 w-6 rounded-full bg-gradient-to-r from-[#120174] to-[#3d2cb5]"></div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#120174]">All Articles</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#120174] hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    {post.mainImage?.asset?.url && (
                      <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                        <Image
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      {post.categories && post.categories.length > 0 && (
                        <span className="inline-block w-fit px-2 py-1 text-xs font-semibold text-[#120174] bg-[#120174]/10 rounded-full mb-3">
                          {post.categories[0].title}
                        </span>
                      )}
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#120174] mb-2 line-clamp-2 transition-colors">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                        {post.author?.name && (
                          <span className="font-medium">{post.author.name}</span>
                        )}
                        {post.publishedAt && (
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
