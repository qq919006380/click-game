'use client';

import { useAtom } from 'jotai';
import { inventoryAtom } from '@/store/game';
import { Navigation } from '@/components/Navigation';
import { BALL_TYPES } from '@/types/ball';
import { motion } from 'framer-motion';
import { Ball } from '@/components/Ball';

export default function Rewards() {
  const [inventory, setInventory] = useAtom(inventoryAtom);

  const handleClaimBall = (type: keyof typeof BALL_TYPES) => {
    const newBall = {
      id: `${type}-${Date.now()}`,
      ...BALL_TYPES[type]
    };
    
    setInventory((prev) => [...prev, newBall]);
  };

  return (
    <div className="min-h-screen bg-darker-bg p-4 pb-20">
      <h1 className="text-4xl font-bold text-neon-pink mb-8 tracking-tight">
        领取球
        <span className="mono text-sm font-normal text-neon-blue ml-3">
          CLAIM YOUR BALLS
        </span>
      </h1>
      
      <div className="grid grid-cols-2 gap-6">
        {Object.entries(BALL_TYPES).map(([type, ball]) => (
          <motion.div
            key={type}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 0 20px var(--neon-pink)',
            }}
            className="cyberpunk-card p-6 rounded-lg relative overflow-hidden"
            onClick={() => handleClaimBall(type as keyof typeof BALL_TYPES)}
          >
            <div className="absolute top-0 right-0 bg-neon-pink px-3 py-1 text-xs mono text-darker-bg">
              {type.toUpperCase()}
            </div>
            
            <div className="flex flex-col items-center">
              <Ball ball={{ id: type, ...ball }} onClick={() => {}} />
              <p className="text-center mt-2">{ball.label}</p>
              <p className="text-center text-sm text-gray-500">+{ball.points} 分</p>
              <button className="w-full mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                领取
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <Navigation />
    </div>
  );
} 