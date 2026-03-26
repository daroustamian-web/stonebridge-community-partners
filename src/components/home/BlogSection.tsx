import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const articles = [
  {
    title: "The Complete Guide to Creating a Safe Home Environment for Seniors",
    description: "Learn essential home modifications and safety tips to prevent falls and accidents while maintaining independence for elderly family members.",
    category: "Safety",
    date: "January 15, 2024",
    readTime: "8 min read",
    image: "/images/blog-safety.jpg",
    slug: "1",
  },
  {
    title: "Understanding Alzheimer's Disease: A Comprehensive Family Guide",
    description: "A detailed guide to understanding Alzheimer's disease, its stages, symptoms, and how families can provide the best support and care.",
    category: "Health & Wellness",
    date: "January 12, 2024",
    readTime: "12 min read",
    image: "/images/blog-alzheimers.jpg",
    slug: "2",
  },
  {
    title: "The Power of Companion Care: Combating Loneliness in Seniors",
    description: "Discover how companion care services can significantly improve quality of life, provide emotional support, and reduce social isolation.",
    category: "Mental Health",
    date: "January 10, 2024",
    readTime: "6 min read",
    image: "/images/blog-companion.jpg",
    slug: "3",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground">Making a difference in families' lives</span>
        </div>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">
            Latest Articles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Care Tips & Insights</h2>
          <p className="text-muted-foreground">Stay informed with our latest articles on home care, health tips, and family support strategies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link to={`/blog/${article.slug}`} className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="text-primary font-medium">{article.category}</span>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{article.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog" className="inline-flex px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
