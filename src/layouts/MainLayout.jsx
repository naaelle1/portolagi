import Navbar from '../components/Navbar';
import { useLenis } from '../hooks/useLenis';

export default function MainLayout({ children }) {
  // Initialize smooth momentum scrolling with native touch preservation
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#171615] text-[#F1E8D8] bg-grain antialiased selection:bg-[#C94A3A] selection:text-[#F9F3E8] overflow-x-hidden">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative pt-20 sm:pt-24 pb-12 px-4 sm:px-6 max-w-6xl mx-auto overflow-visible">
        {children}
      </main>
    </div>
  );
}