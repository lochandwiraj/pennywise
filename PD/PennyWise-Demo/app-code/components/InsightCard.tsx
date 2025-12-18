'use client';

import { motion } from 'framer-motion';
import { Insight } from '@/lib/data';

interface InsightCardProps {
  insight: Insight;
  index: number;
}

const typeColors = {
  alert: 'from-red-500/20 to-orange-500/20 border-red-500/30',
  tip: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  investment: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  achievement: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
  optimization: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30'
};

export function InsightCard({ insight, index }: InsightCardProps) {
  const colorClass = typeColors[insight.type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`glass-card p-6 glass-card-hover bg-gradient-to-br ${colorClass}`}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl">{insight.icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-100 mb-2">{insight.title}</h3>
          <p className="text-slate-300 mb-3 leading-relaxed">{insight.description}</p>
          {insight.actionText && (
            <div className="glass-card p-3 bg-white/5">
              <p className="text-sm text-slate-200">{insight.actionText}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
