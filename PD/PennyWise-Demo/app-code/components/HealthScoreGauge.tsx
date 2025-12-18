'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HealthScoreGaugeProps {
  score: number;
}

export function HealthScoreGauge({ score }: HealthScoreGaugeProps) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = score / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= score) {
        setDisplayScore(score);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [score]);

  const getScoreColor = (s: number) => {
    if (s >= 75) return { color: '#10B981', label: 'Excellent', gradient: 'from-green-500 to-emerald-600' };
    if (s >= 50) return { color: '#F59E0B', label: 'Good', gradient: 'from-yellow-500 to-amber-600' };
    return { color: '#EF4444', label: 'Needs Improvement', gradient: 'from-red-500 to-rose-600' };
  };

  const { color, label, gradient } = getScoreColor(displayScore);
  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (displayScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-48 h-48">
        <svg className="transform -rotate-90 w-48 h-48">
          <circle
            cx="96"
            cy="96"
            r="70"
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            className="text-slate-800"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="70"
            stroke={color}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          >
            {displayScore}
          </motion.div>
          <div className="text-sm text-slate-400 mt-1">/ 100</div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-4 text-center"
      >
        <div className="text-2xl font-bold" style={{ color }}>
          {label}
        </div>
        <p className="text-sm text-slate-400 mt-1">Financial Health Score</p>
      </motion.div>
    </div>
  );
}
