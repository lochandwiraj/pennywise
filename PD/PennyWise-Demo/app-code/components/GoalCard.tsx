'use client';

import { motion } from 'framer-motion';
import { Goal } from '@/lib/data';
import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

interface GoalCardProps {
  goal: Goal;
  index: number;
}

export function GoalCard({ goal, index }: GoalCardProps) {
  const percentage = (goal.current / goal.target) * 100;

  const statusConfig = {
    'on-track': { icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500', label: 'On track' },
    'behind': { icon: AlertCircle, color: 'text-yellow-400', bg: 'bg-yellow-500', label: 'Slightly behind' },
    'completed': { icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500', label: 'Goal completed! Great job! 🏆' }
  };

  const config = statusConfig[goal.status];
  const StatusIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-6 glass-card-hover"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl">{goal.icon}</div>
        <h3 className="text-xl font-bold text-slate-100">{goal.name}</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold font-mono text-purple-400">
            ₹{goal.current.toLocaleString('en-IN')}
          </span>
          <span className="text-slate-400">/ ₹{goal.target.toLocaleString('en-IN')}</span>
        </div>

        <div className="relative">
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
              className={`h-full ${config.bg} rounded-full`}
            />
          </div>
          <span className="absolute -top-6 right-0 text-sm font-bold text-slate-300">
            {Math.round(percentage)}%
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Calendar className="w-4 h-4" />
            <span>{goal.deadline} remaining</span>
          </div>
          <div className={`flex items-center gap-2 ${config.color}`}>
            <StatusIcon className="w-4 h-4" />
            <span className="text-sm font-medium">{config.label}</span>
          </div>
        </div>

        {goal.status === 'completed' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="glass-card p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30"
          >
            <p className="text-center text-green-400 font-semibold">
              🎉 {config.label}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
