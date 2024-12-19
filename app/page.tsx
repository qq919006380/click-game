'use client';

import { useAtom } from 'jotai';
import { Ball } from '@/components/Ball';
import { Navigation } from '@/components/Navigation';
import { scoreAtom, currentBallAtom } from '@/store/game';
import { BALL_TYPES } from '@/types/ball';
import { useEffect } from 'react';

export default function Home() {
  const [score, setScore] = useAtom(scoreAtom);
  const [currentBall, setCurrentBall] = useAtom(currentBallAtom);

  useEffect(() => {
    if (!currentBall) {
      setCurrentBall({
        id: 'default',
        ...BALL_TYPES.normal
      });
    }
  }, [currentBall, setCurrentBall]);

  const handleBallClick = () => {
    if (currentBall) {
      setScore((prev) => prev + currentBall.points);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mono text-6xl font-bold mb-8 tracking-wider">
        {score}
        <span className="text-2xl ml-2 text-neon-blue">分</span>
      </div>
      
      {currentBall && (
        <Ball ball={currentBall} onClick={handleBallClick} />
      )}
      
      <Navigation />
    </div>
  );
}
