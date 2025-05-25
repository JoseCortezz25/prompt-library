import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-zinc-100">
      <div className="container mx-auto px-6 py-10">
        <nav>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-zinc-900">Prompt Library</span>
            <p className="text-md text-zinc-500">
              A library of prompts for multiple purposes.
            </p>
          </div>
        </nav>

        <nav>
          <Link href="/"></Link>
        </nav>
      </div>
    </footer>
  );
};
