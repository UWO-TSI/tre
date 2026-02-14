import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";

export default function MainRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header></Header>
      {children} {/* Page content renders here */}
      <Footer></Footer>
    </>
  );
}
