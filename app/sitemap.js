export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eduriseschool.vercel.app";
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/erp-solutions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/admission-marketing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/school-website-dev", priority: 0.8, changeFrequency: "monthly" },
    { path: "/lms-solutions", priority: 0.8, changeFrequency: "monthly" },
    { path: "/future-skills-academy", priority: 0.8, changeFrequency: "monthly" },
    { path: "/training", priority: 0.8, changeFrequency: "monthly" },
    { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
