import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Home Care", "Health", "Companion Care", "Specialized Care", "Safety", "Nutrition"];

const articles = [
  { title: "The Complete Guide to Creating a Safe Home Environment for Seniors", description: "Learn essential home modifications and safety tips to prevent falls and accidents while maintaining independence for elderly family members.", category: "Safety", date: "January 15, 2024", readTime: "8 min read", image: "/images/blog-safety.jpg", slug: "1" },
  { title: "Understanding Alzheimer's Disease: A Comprehensive Family Guide", description: "A detailed guide to understanding Alzheimer's disease, its stages, symptoms, and how families can provide the best support and care.", category: "Health", date: "January 12, 2024", readTime: "12 min read", image: "/images/blog-alzheimers.jpg", slug: "2" },
  { title: "The Power of Companion Care: Combating Loneliness in Seniors", description: "Discover how companion care services can significantly improve quality of life, provide emotional support, and reduce social isolation.", category: "Companion Care", date: "January 10, 2024", readTime: "6 min read", image: "/images/blog-companion.jpg", slug: "3" },
  { title: "Nutrition Essentials: Healthy Eating for Seniors", description: "Learn about important dietary considerations, meal planning strategies, and nutritional needs specific to older adults.", category: "Nutrition", date: "January 8, 2024", readTime: "7 min read", image: "/images/blog-nutrition.jpg", slug: "4" },
  { title: "Respite Care: Essential Support for Family Caregivers", description: "Understanding the importance of respite care and how it can help prevent caregiver burnout while ensuring continuous quality care.", category: "Home Care", date: "January 5, 2024", readTime: "5 min read", image: "/images/blog-respite.jpg", slug: "5" },
  { title: "Exercise and Physical Activity for Seniors: Staying Active and Independent", description: "Discover safe and effective exercise strategies for seniors that can improve strength, balance, flexibility, and overall health.", category: "Health", date: "January 3, 2024", readTime: "9 min read", image: "/images/facility-care.jpg", slug: "6" },
  { title: "Managing Medications Safely: A Guide for Seniors and Caregivers", description: "Essential tips for organizing, tracking, and safely managing medications to avoid errors and ensure optimal health outcomes.", category: "Health", date: "December 28, 2023", readTime: "6 min read", image: "/images/blog-safety.jpg", slug: "7" },
  { title: "Technology for Seniors: Staying Connected in the Digital Age", description: "How modern technology can help seniors stay connected with family, manage health, and maintain independence in their daily lives.", category: "Home Care", date: "December 25, 2023", readTime: "8 min read", image: "/images/blog-companion.jpg", slug: "8" },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filteredArticles[0];
  const rest = filteredArticles.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[340px] md:h-[400px] overflow-hidden bg-primary">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground max-w-2xl px-4">
              <span className="inline-block px-4 py-1.5 text-xs font-medium border border-primary-foreground/30 rounded-full mb-6">
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Care Tips & Insights</h1>
              <p className="opacity-80 leading-relaxed">
                Stay informed with the latest articles on home care best practices, health tips, and family support strategies from the StoneBridge Community Partners team.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {featured && (
            <Link
              to={`/blog/${featured.slug}`}
              className="group block mb-12 bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-[360px] overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full">{featured.category}</span>
                    <span>{featured.date}</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featured.description}</p>
                  <span className="text-primary font-semibold text-sm">Read Full Article &rarr;</span>
                </div>
              </div>
            </Link>
          )}

          {/* Article Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((a) => (
                <Link key={a.slug} to={`/blog/${a.slug}`} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="text-primary font-medium">{a.category}</span>
                      <span>{a.date}</span>
                      <span>{a.readTime}</span>
                    </div>
                    <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{a.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
            </div>
          )}

          {/* Newsletter */}
          <div className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Stay Updated with Care Tips</h3>
            <p className="text-muted-foreground mb-6">Subscribe to our newsletter for the latest home care insights, health tips, and family support resources.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
