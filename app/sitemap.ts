import type { MetadataRoute } from 'next'
import { sanityClient } from '@/sanity/client'
import { queries } from '@/sanity/queries'

type Post = { slug?: { current?: string } }
type Template = { slug?: { current?: string } }

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enterpriserm.ai').replace(/\/+$/, '')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes present in the app
  const staticPaths = [
    '/',
    '/about',
    '/contact',
    '/blog',
    '/templates',
    '/contents/cookie-notice',
    '/contents/privacy-policy',
    '/contents/terms',
  ]

  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1.0 : 0.7,
  }))

  // Dynamic blog post routes from Sanity
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const posts: Post[] = await sanityClient.fetch(queries.allPosts)
    blogEntries = (posts || [])
      .filter((p) => p?.slug?.current)
      .map((p) => ({
        url: `${siteUrl}/blog/${p!.slug!.current}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      }))
  } catch (e) {
    // If Sanity fetch fails, return only static entries
    blogEntries = []
  }

  // Dynamic template routes from Sanity
  let templateEntries: MetadataRoute.Sitemap = []
  try {
    const templates: Template[] = await sanityClient.fetch(queries.allTemplates)
    templateEntries = (templates || [])
      .filter((t) => t?.slug?.current)
      .map((t) => ({
        url: `${siteUrl}/templates/${t!.slug!.current}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      }))
  } catch (e) {
    templateEntries = []
  }

  return [...staticEntries, ...blogEntries, ...templateEntries]
}
