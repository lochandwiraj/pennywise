'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { InsightCard } from '@/components/InsightCard';
import { insightsSet1, insightsSet2 } from '@/lib/data';

export default function InsightsPage() {
  const [currentSet, setCurrentSet] = useState(1);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const insights = currentSet === 1 ? insightsSet1 : insightsSet2;

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setCurrentSet(currentSet === 1 ? 2 : 1);
      setIsRegenerating(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-start justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">AI Insights</h1>
          <p className="text-slate-400">Personalized recommendations powered by AI</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRegenerate}
          disabled={isRegenerating}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-slate-700 disabled:to-slate-700 text-white font-semibold rounded-xl transition-all duration-300"
        >
          <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">Regenerate</span>
        </motion.button>
      </motion.div>

      <motion.div
        key={currentSet}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {insights.map((insight, index) => (
          <InsightCard key={index} insight={insight} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 glass-card p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20"
      >
        <div className="flex items-start gap-4">
          <div className="text-4xl">🤖</div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">About AI Insights</h3>
            <p className="text-slate-300 leading-relaxed">
              Our AI analyzes your spending patterns, income trends, and financial behavior to provide personalized
              recommendations. These insights are updated daily and tailored specifically to your financial goals.
              Click "Regenerate" to get fresh perspectives on your finances.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
