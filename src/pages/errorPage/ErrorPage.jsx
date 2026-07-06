import { useEffect } from "react";
import { useRouteError, Link } from "react-router";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure styles are loaded so AOS elements render correctly

const ErrorPage = () => {
  const error = useRouteError();

  useEffect(() => {
    // 2. Initialize AOS safely
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-perf-bg px-6 py-12 transition-colors duration-300 `}
    >
      {/* 
        Main Interface Container
        Removed duplicate native CSS animations to let your premium AOS flip animation handle the reveal smoothly
      */}
      <div
        data-aos="fade-down"
        className="bg-perf-card border border-perf-border max-w-md w-full text-center p-8 rounded-2xl shadow-xl flex flex-col items-center group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform scale-100 translate-y-0 opacity-100 will-change-transform"
      >
        {/* Top Feature Icon Ring Block */}
        <div className="h-16 w-16 rounded-2xl bg-perf-input-bg border border-perf-border flex items-center justify-center text-perf-gold mb-6 shadow-xs group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <AlertTriangle size={32} className="motion-safe:animate-pulse" />
        </div>

        {/* Typography Content Setup */}
        <h1 className="font-serif-luxury font-bold text-4xl text-perf-text-main mb-2 tracking-wide">
          Oops!
        </h1>

        <p className="font-serif-luxury text-xl font-medium text-perf-gold mb-4">
          {error?.status === 404 ? "Page Not Found" : "Something Went Wrong"}
        </p>

        {/* Dynamic Context Description Output */}
        <p className="text-perf-text-muted text-base mb-8 font-medium leading-relaxed">
          {error?.statusText ||
            error?.message ||
            "The page you are looking for might have been removed or is temporarily unavailable."}
        </p>

        {/* Interactive Responsive Control Stack */}
        <div className="w-full flex flex-col sm:flex-row gap-3 items-center justify-center">
          {/* Main Structural Navigation Element */}
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-semibold text-perf-card bg-perf-gold px-6 py-3 rounded-xl hover:opacity-90 active:scale-98 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md cursor-pointer"
          >
            <Home size={18} />
            <span>Go to Home</span>
          </Link>

          {/* Fallback Refresh Window Control */}
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-semibold text-perf-text-main bg-perf-input-bg border border-perf-border px-6 py-3 rounded-xl hover:bg-perf-border/20 active:scale-98 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
          >
            <RefreshCw size={16} />
            <span>Try Again</span>
          </button>
        </div>

        {/* Branding Trademark Signature */}
        <div className="mt-8 pt-4 border-t border-perf-border/40 w-full text-center">
          <p className="text-xs text-perf-text-muted font-serif-luxury tracking-widest uppercase">
            RossWell Luxury Premium
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
