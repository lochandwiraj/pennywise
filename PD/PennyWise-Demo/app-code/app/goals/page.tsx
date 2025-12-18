'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { GoalCard } from '@/components/GoalCard';
import { goals } from '@/lib/data';

export default function GoalsPage() {
  return (
    <div className="min-h-screen p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-start justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">Financial Goals</h1>
          <p className="text-slate-400">Track your progress towards your dreams</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add Goal</span>
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {goals.map((goal, index) => (
          <GoalCard key={goal.name} goal={goal} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6"
      >
        <h2 className="text-xl font-bold mb-4 text-slate-100">Goal Setting Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-3xl">🎯</div>
            <h3 className="font-bold text-slate-200">Be Specific</h3>
            <p className="text-sm text-slate-400">
              Set clear, measurable goals with exact amounts and deadlines for better tracking.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">📊</div>
            <h3 className="font-bold text-slate-200">Track Progress</h3>
            <p className="text-sm text-slate-400">
              Regularly review your goals and adjust your spending to stay on track.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🎉</div>
            <h3 className="font-bold text-slate-200">Celebrate Wins</h3>
            <p className="text-sm text-slate-400">
              Reward yourself when you achieve milestones to stay motivated.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
