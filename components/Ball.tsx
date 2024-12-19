'use client';
import { motion } from 'framer-motion';
import { Ball as BallType } from '@/types/ball';

interface BallProps {
  ball: BallType;
  onClick: () => void;
}

export function Ball({ ball, onClick }: BallProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      style={{
        width: ball.size,
        height: ball.size,
        backgroundColor: ball.color,
        borderRadius: '50%',
        cursor: 'pointer'
      }}
      className="flex items-center justify-center shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    />
  );
} 