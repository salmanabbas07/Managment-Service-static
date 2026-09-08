import Blog from "../../components/Blog/Blog";

export const metadata = {
  title: "Blog & Insights - EduRise School Growth Platform",
  description: "Read expert guides on increasing school admissions, digitizing campus management, and implementing STEM curriculum.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Insights - EduRise School Growth Platform",
    description: "Read expert guides on increasing school admissions, digitizing campus management, and implementing STEM curriculum.",
    url: "/blog",
  },
};

export default function Page() {
  return <Blog />;
}
