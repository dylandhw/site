import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }


  return (
    <article className="prose prose-neutral max-w-none mb-8 prose-headings:font-semibold prose-p:mb-4 prose-ul:mb-4 prose-li:mb-1 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:mb-4 prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-lg prose-pre:p-4 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm">
      <h1 className="text-2xl font-semibold underline mb-2">{post.title}</h1>
      <time className="text-sm text-gray-500 block mb-8">{post.date}</time>
      {post.content}
    </article>
  )
}