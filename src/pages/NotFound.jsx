// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarBackground />

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-48">
        <div className="max-w-md bg-card/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
          <p className="text-muted-foreground mb-6">
            Oops! We couldn’t find the page you’re looking for.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </button>
        </div>
      </main>
    </div>
  );
};
