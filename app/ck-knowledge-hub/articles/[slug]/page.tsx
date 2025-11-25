import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, BookOpen, ArrowLeft, Share2, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

const articles = {
  "how-to-choose-the-right-fertilizer-for-your-crops": {
    title: "How to Choose the Right Fertilizer for Your Crops",
    excerpt:
      "Selecting the Right Fertilizer for Crops is crucial for maximizing yield, improving soil health, and ensuring sustainable agriculture.",
    image: "/hand-holding-fertilizer-pellets-over-soil-with-gre.jpg",
    date: "April 9, 2025",
    category: "Crop Nutrition",
    readTime: "5 min read",
    author: "Dr. Maria Gonzalez",
    content: `
      <p>Selecting the right fertilizer for your crops is one of the most important decisions you'll make as a farmer or gardener. The proper fertilizer can significantly boost yields, improve soil health, and ensure sustainable agricultural practices.</p>

      <h2>Understanding Your Soil</h2>
      <p>Before choosing any fertilizer, conduct a comprehensive soil test. This analysis will reveal nutrient deficiencies, pH levels, and organic matter content. Knowing your baseline helps you make informed decisions about which nutrients to add.</p>

      <h2>The NPK Ratio</h2>
      <p>Every fertilizer package displays three numbers representing nitrogen (N), phosphorus (P), and potassium (K). Different crops require different ratios:</p>
      <ul>
        <li><strong>Leafy vegetables:</strong> Need higher nitrogen (e.g., 10-5-5)</li>
        <li><strong>Flowering plants:</strong> Benefit from more phosphorus (e.g., 5-10-5)</li>
        <li><strong>Fruiting crops:</strong> Require balanced nutrition (e.g., 10-10-10)</li>
      </ul>

      <h2>Organic vs. Synthetic</h2>
      <p>Organic fertilizers release nutrients slowly and improve soil structure over time, while synthetic fertilizers provide immediate nutrition. Consider your goals, budget, and farming philosophy when choosing between them.</p>

      <h2>Application Timing</h2>
      <p>Apply fertilizers at the right growth stage for maximum effectiveness. Pre-planting applications establish strong root systems, while mid-season feeding supports vigorous growth and fruit development.</p>
    `,
  },
  "organic-vs-chemical-fertilizers-pros-and-cons": {
    title: "Organic vs. Chemical Fertilizers: Pros and Cons",
    excerpt:
      "When it comes to nourishing plants and boosting crop yields, farmers and gardeners face an important choice.",
    image: "/split-image-showing-organic-compost-and-chemical-f.jpg",
    date: "April 27, 2025",
    category: "Sustainable Farming",
    readTime: "7 min read",
    author: "Carlos Rodriguez",
    content: `
      <p>The debate between organic and chemical fertilizers continues to be a central topic in modern agriculture. Each approach offers distinct advantages and challenges that farmers must carefully consider.</p>

      <h2>Organic Fertilizers: The Natural Approach</h2>
      <p>Organic fertilizers derive from plant and animal sources, including compost, manure, bone meal, and fish emulsion.</p>
      
      <h3>Advantages:</h3>
      <ul>
        <li>Improve soil structure and water retention</li>
        <li>Support beneficial microorganism populations</li>
        <li>Release nutrients slowly and steadily</li>
        <li>Reduce environmental pollution</li>
        <li>Build long-term soil health</li>
      </ul>

      <h3>Disadvantages:</h3>
      <ul>
        <li>Lower nutrient concentration</li>
        <li>Slower results</li>
        <li>More expensive per nutrient unit</li>
        <li>Inconsistent nutrient composition</li>
      </ul>

      <h2>Chemical Fertilizers: Precision Nutrition</h2>
      <p>Synthetic fertilizers are manufactured to contain specific nutrient ratios, offering precise control over plant nutrition.</p>

      <h3>Advantages:</h3>
      <ul>
        <li>Immediate nutrient availability</li>
        <li>Precise nutrient ratios</li>
        <li>Lower cost per nutrient</li>
        <li>Easy application</li>
        <li>Consistent results</li>
      </ul>

      <h3>Disadvantages:</h3>
      <ul>
        <li>Can damage soil structure</li>
        <li>May harm beneficial organisms</li>
        <li>Risk of nutrient leaching</li>
        <li>Requires more frequent application</li>
        <li>Environmental concerns</li>
      </ul>
    `,
  },
  "drip-irrigation-and-fertilizer-smart-farming-combo": {
    title: "Drip Irrigation and Fertilizer: A Smart Farming Combo",
    excerpt: "Modern agriculture demands smarter, more efficient methods to grow food while conserving resources.",
    image: "/drip-irrigation-system-watering-rows-of-crops-in-l.jpg",
    date: "April 24, 2025",
    category: "Irrigation Technology",
    readTime: "6 min read",
    author: "Ahmed Hassan",
    content: `
      <p>Combining drip irrigation with fertilizer application, known as fertigation, represents one of the most efficient farming practices available today. This smart farming approach maximizes resource efficiency while boosting crop yields.</p>

      <h2>What is Fertigation?</h2>
      <p>Fertigation is the practice of applying water-soluble fertilizers through irrigation systems. This method delivers nutrients directly to plant roots precisely when and where they're needed.</p>

      <h2>Benefits of the Drip-Fertilizer Combination</h2>
      <ul>
        <li><strong>Water Conservation:</strong> Reduces water usage by up to 50% compared to traditional methods</li>
        <li><strong>Nutrient Efficiency:</strong> Minimizes fertilizer waste and runoff</li>
        <li><strong>Labor Savings:</strong> Automates both irrigation and fertilization</li>
        <li><strong>Improved Yields:</strong> Consistent nutrient delivery promotes optimal growth</li>
        <li><strong>Reduced Disease:</strong> Keeps foliage dry, minimizing fungal problems</li>
      </ul>

      <h2>Best Practices for Fertigation</h2>
      <p>Success with fertigation requires attention to detail and proper system management. Use only water-soluble fertilizers designed for irrigation systems, and monitor EC and pH levels regularly to ensure optimal nutrient availability.</p>
    `,
  },
  "understanding-npk-ratios-in-fertilizers": {
    title: "Understanding NPK Ratios in Fertilizers",
    excerpt: "Learn how to read and apply NPK ratios for optimal crop nutrition and growth performance.",
    image: "/fertilizer-bags-showing-npk-numbers.jpg",
    date: "April 15, 2025",
    category: "Crop Nutrition",
    readTime: "4 min read",
    author: "Dr. Sarah Chen",
    content: `
      <p>The three numbers you see on every fertilizer package—the NPK ratio—are your roadmap to proper plant nutrition. Understanding these numbers empowers you to make informed fertilizer choices.</p>

      <h2>Decoding the Numbers</h2>
      <p>NPK stands for Nitrogen (N), Phosphorus (P), and Potassium (K). A fertilizer labeled 10-10-10 contains 10% nitrogen, 10% phosphorus, and 10% potassium by weight.</p>

      <h2>Role of Each Nutrient</h2>
      <ul>
        <li><strong>Nitrogen (N):</strong> Promotes leafy green growth and chlorophyll production</li>
        <li><strong>Phosphorus (P):</strong> Supports root development and flowering</li>
        <li><strong>Potassium (K):</strong> Enhances disease resistance and overall plant health</li>
      </ul>

      <h2>Common NPK Ratios and Their Uses</h2>
      <p>Different crops at various growth stages require different nutrient balances. High-nitrogen formulas (20-10-10) suit leafy vegetables, while bloom boosters (10-30-10) benefit flowering plants.</p>
    `,
  },
  "soil-testing-your-first-step-to-better-yields": {
    title: "Soil Testing: Your First Step to Better Yields",
    excerpt: "Discover why soil testing is essential for precision agriculture and how to interpret your results.",
    image: "/agronomist-testing-soil-sample-in-field.jpg",
    date: "April 12, 2025",
    category: "Soil Health",
    readTime: "8 min read",
    author: "Dr. James Mitchell",
    content: `
      <p>Soil testing is the foundation of successful crop production. Without knowing your soil's current nutrient status, you're essentially farming blind, potentially wasting money on unnecessary fertilizers or missing critical deficiencies.</p>

      <h2>Why Test Your Soil?</h2>
      <p>Regular soil testing provides crucial information about nutrient levels, pH, organic matter content, and potential toxicities. This data enables precision fertilization, saving money while optimizing yields.</p>

      <h2>When to Test</h2>
      <p>Test your soil every 2-3 years, or annually for intensive production. The best time is fall or early spring before planting, when results can guide your fertilization program.</p>

      <h2>Understanding Test Results</h2>
      <p>Soil test reports include nutrient levels (measured in ppm or lbs/acre), pH, and recommendations. Pay special attention to pH, as it affects nutrient availability even when nutrients are present.</p>

      <h2>Taking Action</h2>
      <p>Use test results to create a targeted fertilization plan. Address pH issues first, as proper pH ensures maximum nutrient availability from your fertilizer applications.</p>
    `,
  },
  "micronutrients-small-elements-big-impact": {
    title: "Micronutrients: Small Elements, Big Impact",
    excerpt: "Explore the critical role of micronutrients in plant health and how deficiencies affect crop quality.",
    image: "/healthy-vibrant-crop-leaves-close-up.jpg",
    date: "April 6, 2025",
    category: "Plant Health",
    readTime: "5 min read",
    author: "Dr. Elena Petrova",
    content: `
      <p>While macronutrients like nitrogen, phosphorus, and potassium get most of the attention, micronutrients play equally critical roles in plant health and productivity. Though needed in tiny amounts, their absence can devastate crops.</p>

      <h2>Essential Micronutrients</h2>
      <p>Plants require seven micronutrients: iron (Fe), manganese (Mn), zinc (Zn), copper (Cu), boron (B), molybdenum (Mo), and chlorine (Cl). Each performs specific functions crucial for plant health.</p>

      <h2>Common Deficiency Symptoms</h2>
      <ul>
        <li><strong>Iron:</strong> Yellowing of young leaves with green veins</li>
        <li><strong>Zinc:</strong> Stunted growth and small, distorted leaves</li>
        <li><strong>Boron:</strong> Death of growing points and poor fruit set</li>
        <li><strong>Manganese:</strong> Interveinal chlorosis on older leaves</li>
      </ul>

      <h2>Correcting Deficiencies</h2>
      <p>Micronutrient deficiencies often result from pH imbalances rather than actual soil depletion. Adjust pH first, then apply targeted micronutrient fertilizers if problems persist.</p>
    `,
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title} | CK Knowledge Hub`,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 border-b">
        <div className="container max-w-4xl">
          <Link
            href="/ck-knowledge-hub/articles"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
          <div className="space-y-4">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{article.title}</h1>
            <p className="text-xl text-muted-foreground">{article.excerpt}</p>
            <div className="flex items-center justify-between pt-4 border-t">
              <p className="text-sm text-muted-foreground">By {article.author}</p>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container max-w-4xl py-8">
        <div className="relative h-96 rounded-xl overflow-hidden">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>
      </section>

      {/* Article Content */}
      <section className="container max-w-3xl py-8">
        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-4 prose-ul:my-4 prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </section>

      {/* CTA Section */}
      <section className="container max-w-4xl py-16 border-t">
        <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want More Agricultural Insights?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Join our community to access exclusive content, expert advice, and the latest farming innovations
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
            <Link href="/join-community">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
