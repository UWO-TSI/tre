import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";
import { MobileMenuProvider } from "@/components/header/MobileMenuContext";
import MobileMenuDrawer from "@/components/header/MobileMenuDrawer";

export default function MainRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileMenuProvider>
      <MobileMenuDrawer />
      <div id="page-wrapper">
        <Header></Header>
        {children} {/* Page content renders here */}
        <Footer></Footer>
      </div>
    </MobileMenuProvider>
  );
}
