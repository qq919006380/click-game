'use client';

import { useAtom } from 'jotai';
import { inventoryAtom, currentBallAtom } from '@/store/game';
import { Navigation } from '@/components/Navigation';
import { Ball } from '@/components/Ball';
import { motion } from 'framer-motion';

export default function Inventory() {
  const [inventory] = useAtom(inventoryAtom);
  const [, setCurrentBall] = useAtom(currentBallAtom);

  const handleSelectBall = (ball: any) => {
    setCurrentBall(ball);
  };

  return (
    <div className="min-h-screen bg-darker-bg">
      <div className="max-w-4xl mx-auto p-6 pb-24">
        <h1 className="text-4xl font-bold text-neon-pink neon-text mb-8 tracking-tight">
          我的背包
          <span className="text-sm font-normal text-neon-blue ml-3">
            ({inventory.length} 个物品)
          </span>
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {inventory.map((ball) => (
            <motion.div
              key={ball.id}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px var(--neon-pink)',
              }}
              whileTap={{ scale: 0.98 }}
              className="cyberpunk-card p-6 rounded-lg transition-all duration-300"
              onClick={() => handleSelectBall(ball)}
            >
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex justify-center items-center">
                  <Ball ball={ball} onClick={() => {}} />
                </div>
                <h3 className="font-medium text-gray-800 dark:text-white mt-3 text-center">
                  {ball.label}
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white dark:from-blue-400 dark:to-purple-400 mt-2">
                  +{ball.points} 分
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {inventory.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-neon-pink text-lg mb-2 font-medium neon-text">
              背包是空的
            </div>
            <p className="text-neon-blue text-sm">
              快去领取球吧！
            </p>
          </div>
        )}
      </div>
      
      <Navigation />
    </div>
  );
} 