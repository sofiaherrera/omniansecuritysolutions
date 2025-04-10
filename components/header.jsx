// File: components/Header.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#111111]">
      {/* LEFT: Logo & Branding */}
      <div className="flex items-center space-x-2">
        {/* Logo Image - fingerprint.svg should be in the public/ folder */}
        <div className="relative w-8 h-8">
          <Image
            src="/fingerprint.svg"
            alt="Omnian Security Solutions Logo"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <span className="text-white font-semibold text-lg">
          OMNIAN SECURITY SOLUTIONS
        </span>
      </div>

      {/* CENTER: Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
          About Us
        </Link>
      </nav>

      {/* RIGHT: Contact Us Button */}
      <Link href="/contact">
        <button className="bg-[#F2573D] text-white font-semibold py-2 px-4 rounded hover:bg-[#E3472D] transition-colors">
          Contact Us
        </button>
      </Link>
    </header>
  );
}
