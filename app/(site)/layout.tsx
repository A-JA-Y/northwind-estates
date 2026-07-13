// import PageHeader from "@/components/PageHeader";
import HomePageHeader from "@/components/HomePageHeader";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomePageHeader />
      <main className="min-h-screen bg-white w-full">{children}</main>
      <Footer />
    </>
  );
}
