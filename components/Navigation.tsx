import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-darker-bg border-t border-neon-pink">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-around">
        <Link href="/inventory" className="flex flex-col items-center text-neon-pink hover:text-neon-purple transition-colors duration-300">
          <span className="neon-text">背包</span>
        </Link>
        <Link href="/" className="flex flex-col items-center text-neon-pink hover:text-neon-purple transition-colors duration-300">
          <span className="neon-text">主页</span>
        </Link>
        <Link href="/rewards" className="flex flex-col items-center text-neon-pink hover:text-neon-purple transition-colors duration-300">
          <span className="neon-text">领取</span>
        </Link>
      </div>
    </nav>
  );
} 