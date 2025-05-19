import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-20 py-4 bg-white sticky top-0 z-50">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-violet">SerenityMind</span>
      </div>
      <div className="flex items-center space-x-8">
        <Link
          href="#hero"
          className="text-light-gray hover:text-violet font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          href="#features"
          className="text-light-gray hover:text-violet font-medium transition-colors"
        >
          Features
        </Link>
        <Link
          href="#how-it-works"
          className="text-light-gray hover:text-violet font-medium transition-colors"
        >
          How It Works
        </Link>
        <Link
          href="/platform"
          className="bg-violet text-white px-4 py-2 rounded-xl font-medium transition hover:opacity-90"
        >
          Join Now
        </Link>
      </div>
    </nav>
  );
}
