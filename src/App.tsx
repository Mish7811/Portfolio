import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://mishals-portfolio.lovable.app";
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Loading Latest Portfolio Version
        </h1>

        <p className="text-zinc-400 text-lg">
          Redirecting you to the updated experience...
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
}

export default App;
