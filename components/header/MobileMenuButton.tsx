"use client";
import { useMobileMenu } from "./MobileMenuContext";

export default function MobileMenuButton() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

  return (
    <button
      className="md:hidden flex items-center justify-center w-10 h-10"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 h-5 relative flex flex-col justify-center gap-1.5">
        {/* Top bar */}
        <span
          className={`block h-0.5 w-full bg-main-darkpurple transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        {/* Middle bar */}
        <span
          className={`block h-0.5 w-full bg-main-darkpurple transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        {/* Bottom bar */}
        <span
          className={`block h-0.5 w-full bg-main-darkpurple transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>
    </button>
  );
}
