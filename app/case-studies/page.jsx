import CaseStudies from "../../components/CaseStudies/CaseStudies";

export const metadata = {
  title: "Case Studies & Success Stories - EduRise",
  description: "Explore real case studies of schools increasing admissions by 230% and eliminating admin delays with EduRise.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies & Success Stories - EduRise",
    description: "Explore real case studies of schools increasing admissions by 230% and eliminating admin delays with EduRise.",
    url: "/case-studies",
  },
};

export default function Page() {
  return <CaseStudies />;
}
