"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, BookOpen, Video, FileText, Users } from "lucide-react"

const categories = [
  {
    name: "Research & Articles",
    description: "Latest agricultural research and expert insights",
    icon: BookOpen,
    count: 24,
    color: "emerald",
  },
  {
    name: "Video Tutorials",
    description: "Step-by-step guides and demonstrations",
    icon: Video,
    count: 18,
    color: "blue",
  },
  {
    name: "Technical Guides",
    description: "Detailed technical documentation and manuals",
    icon: FileText,
    count: 32,
    color: "orange",
  },
  {
    name: "Community Forum",
    description: "Connect with experts and fellow farmers",
    icon: Users,
    count: 156,
    color: "purple",
  },
]

const featuredArticles = [
  {
    id: 1,
    title: "How to Choose the Right Fertilizer for Your Crops",
    excerpt:
      "Selecting the Right Fertilizer for Crops is crucial for maximizing yield, improving soil health, and ensuring sustainable agriculture. Learn the key factors to consider when choosing fertilizers.",
    image: "/hand-holding-fertilizer-pellets-over-soil-with-gre.jpg",
    date: "April 9, 2025",
    category: "Crop Nutrition",
    readTime: "5 min read",
    comments: 0,
  },
  {
    id: 2,
    title: "Organic vs. Chemical Fertilizers: Pros and Cons",
    excerpt:
      "When it comes to nourishing plants and boosting crop yields, farmers and gardeners face an important choice. Understand the benefits and drawbacks of each approach.",
    image: "/split-image-showing-organic-compost-and-chemical-f.jpg",
    date: "April 27, 2025",
    category: "Sustainable Farming",
    readTime: "7 min read",
    comments: 0,
  },
  {
    id: 3,
    title: "Drip Irrigation and Fertilizer: A Smart Farming Combo",
    excerpt:
      "Modern agriculture demands smarter, more efficient methods to grow food while conserving resources. Discover how to optimize water and nutrient delivery.",
    image: "/drip-irrigation-system-watering-rows-of-crops-in-l.jpg",
    date: "April 24, 2025",
    category: "Irrigation Technology",
    readTime: "6 min read",
    comments: 0,
  },
  {
    id: 4,
    title: "Understanding NPK Ratios in Fertilizers",
    excerpt:
      "Learn how to read and apply NPK ratios for optimal crop nutrition and growth performance. Master the fundamentals of fertilizer composition.",
    image: "/fertilizer-bags-showing-npk-numbers.jpg",
    date: "April 15, 2025",
    category: "Crop Nutrition",
    readTime: "4 min read",
    comments: 0,
  },
  {
    id: 5,
    title: "Soil Testing: Your First Step to Better Yields",
    excerpt:
      "Discover why soil testing is essential for precision agriculture and how to interpret your results for maximum crop productivity.",
    image: "/agronomist-testing-soil-sample-in-field.jpg",
    date: "April 12, 2025",
    category: "Soil Health",
    readTime: "8 min read",
    comments: 0,
  },
  {
    id: 6,
    title: "Micronutrients: Small Elements, Big Impact",
    excerpt:
      "Explore the critical role of micronutrients in plant health and how deficiencies affect crop quality and yield potential.",
    image: "/healthy-vibrant-crop-leaves-close-up.jpg",
    date: "April 6, 2025",
    category: "Plant Health",
    readTime: "5 min read",
    comments: 0,
  },
]

const recentResources = [
  {
    title: "Crop Protection Guide 2025",
    type: "PDF Guide",
    size: "2.4 MB",
    downloads: 342,
  },
  {
    title: "Sustainable Agriculture Practices",
    type: "E-Book",
    size: "5.1 MB",
    downloads: 518,
  },
  {
    title: "Nutrient Management Calculator",
    type: "Tool",
    size: "Web App",
    downloads: 1243,
  },
]

export default function CKKnowledgeHubClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">CK Knowledge Hub</h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl mx-auto text-balance">
              Your comprehensive resource center for agricultural excellence, research insights, and practical farming
              solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 text-lg px-8" asChild>
                <Link href="/ck-knowledge-hub/articles">
                  Browse Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 text-lg px-8" asChild>
                <Link href="/join-community">
                  Join Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="featured-articles" className="py-20 bg-white scroll-mt-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights and practical guidance for modern agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Article Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold leading-tight text-balance group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>

                  {/* Article Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-emerald-600" />
                      {article.readTime}
                    </span>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-4">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              asChild
            >
              <Link href="/ck-knowledge-hub/articles">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Stay Updated with CK Knowledge Hub</h2>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Subscribe to receive the latest articles, research findings, and agricultural insights delivered to your
              inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-emerald-100">Join 2,500+ farmers already subscribed to our newsletter</p>
          </div>
        </div>
      </section>
    </div>
  )
}
