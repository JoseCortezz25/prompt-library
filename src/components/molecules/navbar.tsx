import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-transparent/50 px-6 py-4 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            Prompt Library
          </Link>
        </div>
      </div>
    </header>
  );
};
