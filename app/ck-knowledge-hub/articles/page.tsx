import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, ArrowRight, BookOpen, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "All Articles | CK Knowledge Hub",
  description: "Browse all agricultural articles, research insights, and expert guidance from the CK Knowledge Hub",
}

const articles = [
  {
    id: 1,
    slug: "how-to-choose-the-right-fertilizer-for-your-crops",
    title: "How to Choose the Right Fertilizer for Your Crops",
    excerpt:
      "Selecting the Right Fertilizer for Crops is crucial for maximizing yield, improving soil health, and ensuring sustainable agriculture. Learn the key factors to consider when choosing fertilizers.",
    date: "April 9, 2025",
    category: "Crop Nutrition",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "organic-vs-chemical-fertilizers-pros-and-cons",
    title: "Organic vs. Chemical Fertilizers: Pros and Cons",
    excerpt:
      "When it comes to nourishing plants and boosting crop yields, farmers and gardeners face an important choice. Understand the benefits and drawbacks of each approach.",
    date: "April 27, 2025",
    category: "Sustainable Farming",
    readTime: "7 min read",
  },
  {
    id: 3,
    slug: "drip-irrigation-and-fertilizer-smart-farming-combo",
    title: "Drip Irrigation and Fertilizer: A Smart Farming Combo",
    excerpt:
      "Modern agriculture demands smarter, more efficient methods to grow food while conserving resources. Discover how to optimize water and nutrient delivery.",
    date: "April 24, 2025",
    category: "Irrigation Technology",
    readTime: "6 min read",
  },
  {
    id: 4,
    slug: "understanding-npk-ratios-in-fertilizers",
    title: "Understanding NPK Ratios in Fertilizers",
    excerpt:
      "Learn how to read and apply NPK ratios for optimal crop nutrition and growth performance. Master the fundamentals of fertilizer composition.",
    date: "April 15, 2025",
    category: "Crop Nutrition",
    readTime: "4 min read",
  },
  {
    id: 5,
    slug: "soil-testing-your-first-step-to-better-yields",
    title: "Soil Testing: Your First Step to Better Yields",
    excerpt:
      "Discover why soil testing is essential for precision agriculture and how to interpret your results for maximum crop productivity.",
    date: "April 12, 2025",
    category: "Soil Health",
    readTime: "8 min read",
  },
  {
    id: 6,
    slug: "micronutrients-small-elements-big-impact",
    title: "Micronutrients: Small Elements, Big Impact",
    excerpt:
      "Explore the critical role of micronutrients in plant health and how deficiencies affect crop quality and yield potential.",
    date: "April 6, 2025",
    category: "Plant Health",
    readTime: "5 min read",
  },
]

export default function ArticlesListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-16">
        <div className="container">
          <Link href="/ck-knowledge-hub" className="inline-flex items-center text-emerald-100 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Knowledge Hub
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Articles</h1>
          <p className="text-xl text-emerald-100 max-w-2xl">
            Browse our complete collection of agricultural articles, research insights, and expert guidance
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                href={`/ck-knowledge-hub/articles/${article.slug}`}
                className="block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-emerald-500 p-6 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-emerald-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
