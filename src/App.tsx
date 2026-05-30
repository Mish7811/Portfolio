import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://portfolio-mishal-reuel.vercel.app/";
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Loading Latest Portfolio Version
        </h1>

        <p className="text-zinc-400">
          Redirecting to the updated experience...
        </p>
      </div>
    </div>
  );
}